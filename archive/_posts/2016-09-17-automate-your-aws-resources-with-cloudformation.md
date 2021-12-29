---
layout: post
title: "Automate your AWS Resources with CloudFormation"
description: ""
tags: [aws, cloudformation]
comments: true
---

*Reposted from my company blog at [Lofty Labs](http://hirelofty.com/blog/automate-your-aws-resources-cloudformation/) on 20 September 2016*

Amazon Web Services provides every resource you could possibly need to run a distributed web architecture at any scale. AWS is home to everything from a few of our clients who are only running a few servers, to Netflix who runs thousands of servers delivering content to millions of customers, and everything in between. <!--more-->The scalability and diversity of AWS services are unmatched in the hosted services space. In fact it can be staggering to the uninitiated when you first login -- there are so many possibilities. On top of there being so many options, it kind of feels like reverting back to Windows NT system administration. There's five thousand panels with a ten million places to click. You can setup any system your heart desires but you need to know the 110 clicks and 30 text fields you need to fill out in order to get there. If something goes wrong and you need to rebuild it, you have those 110 clicks and 30 text fields to fill out again. Hope you wrote down everything you need to do the first time!

Amazon saw this obvious pain point and built CloudFormation. AWS CloudFormation allows you to model your entire system as a "stack" in a JSON file. A "stack" is every AWS component necessary for your system to operate and it is bundled as a single atomic unit. This could be 15 EC2 servers, 3 ELBs, 10 IAM users, 6 S3 buckets, and any number of other components that are all configured to work together. This creates a change of perspective when thinking about your AWS resources. You no longer think of each component by itself and how to configure them to work together, but as a single holistic stack.

If you ever want to change any sub-component, you don't change it directly; You modify the definition of the stack as a whole and then redeploy. You can do this via `change sets`, but we'll leave that for another post to discuss. Using this JSON definition file we can spin up any number of AWS components as a single unit. If there are any errors in the creation of the stack, AWS automatically rolls back every component. Think of it as a database transaction. If we create 10 EC2 Servers, 2 Elastic Load Balancers, and 15 Route53 DNS records successfully then the stack creation fails on creating an S3 bucket because you typed the name of the bucket incorrectly, AWS removes all of those 10 EC2 Servers, 2 Elastic Load Balancers, and 15 Route53 DNS records and notifies you of the failure. CloudFormation actions are treated as all-or-nothing atomic transactions.

![stack resources](/images/2016-09-17-automate-your-aws-resources-with-cloudformation/stack-resources.png)

Imagine then you no longer need a stack and you want to remove it. Before CloudFormation you would have to go to each service and delete all of the components. This may be easy if you are running a small infrastructure, but imagine if you had hundreds or thousands of AWS components. It could take ages! With CloudFormation you can delete a stack and it removes all components as a single unit.

`Infrastructure as code` is a mantra that has become popular in the past few years but most solutions relate to configuration of existing resources and the software components within them. CloudFormation allows you to take that a step further and not just store the configuration of your infrastructure as code, but store the components themselves as code.

That's enough high level explanation. Let's look at an example.

# Template Section Breakdown
---

```json
{
  "AWSTemplateFormatVersion" : "2010-09-09",
  "Description" : "...",
  "Parameters" : {...},
  "Mappings": {...},
  "Conditions": {...}
  "Resources": {...},
  "Outputs": {...}
}
```

Notice there are 6 sections in a CloudFormation template: Description, Parameters, Mappings, Conditions, Resources, and Outputs.

## AWSTemplateFormatVersion

The AWSTemplateFormatVersion section identifies the capabilities of the template. The latest template format version is 2010-09-09 and is currently the only valid value. This section is optional.

## Description

The description allows you to provide arbitrary comments about your template. It is a JSON literal string that is between 0 and 1024 bytes in length. You cannot set the description via a parameter or function result.

## Parameters

The optional Parameters section enables you to pass values into your template at stack creation time. Using parameters you can replace hard-coded values with variables set at runtime. Parameters allow you to make your stack definitions more reusable. Once you've set a parameter in the parameter section like this:

```json
"Parameters": {
  "EC2Node": {
    "Description": "The instance type of server (e.g. t2.micro).",
    "Type": "String",
    "Default": "m4.large",
    "AllowedValues": [
      "t2.micro",
      "t1.micro",
      "t2.medium",
      "m1.small",
      "t2.medium",
      "m4.large"
    ]
  }
}
```

Hard-coded one scenario use templates like this:

```json
"EC2Node": {
  "Type": "AWS::EC2::Instance",
  "Properties": {
    "InstanceType": 't2.micro'
  }
}
```

Become more modular and reusable like this:

```json
"EC2Node": {
  "Type": "AWS::EC2::Instance",
  "Properties": {
    "InstanceType": {
      "Ref": "EC2Node"
    }
  }
}
```

Now the `InstanceType` of the `EC2Node` is set via a variable that AWS prompts you for at runtime.

## Conditions

Conditions are defined in the top-level `Conditions` section of the CloudFormation template using intrinsic functions that evaluate to a boolean condition at runtime. You can then use those boolean values to control resource creation. It sounds a little complicated but let's look at an example.

Consider an example where you have a staging and production stack. In the production stack you want to create an instance for Kibana log monitoring; You've decided in the staging stack you don't really need that extra node.

Using a combination of `Parameters` and `Conditions` we can accomplish this without having to have two different stack definition files.

Example:

```json
{
  "AWSTemplateFormatVersion" : "2010-09-09",
  "Parameters" : {
    "EnvType" : {
      "Description" : "Environment type.",
      "Default" : "staging",
      "Type" : "String",
      "AllowedValues" : ["production", "staging"],
      "ConstraintDescription" : "must specify prod or test."
    }
  },
  "Conditions" : {
    "CreateProdResources" : {"Fn::Equals" : [{"Ref" : "EnvType"}, "production"]}
  },
  "Resources" : {
    "KibanaNode" : {
      "Type" : "AWS::EC2::Instance",
      "Condition" : "CreateProdResources",
      "Properties" : {
        "ImageId" : "ami-7f418316"
      }
    }
  }
}
```

In this example AWS will ask you at runtime what you want to set the `EnvType` parameter to. If you set it to `production`, the `CreateProdResources` condition will evaluate to `true` and when AWS evaluates the `KibanaNode` resource definition, it will recognize the `true` value of the `CreateProdResources` condition and create the `KibanaNode`. Inversely, if you had set `EnvType` to `staging`, causing the `CreateProdResources` condition to evaluate to `false`, AWS would skip creating the `KibanaNode` resource.

## Mappings

`Mappings` is an optional section where you can build a key value store to help simplify your stack definition file. A common usage is mapping AMI IDs to regions. In this example you need to pull the AMI available in the region you are currently working in.

```json
"Mappings" : {
  "RegionMap" : {
    "us-east-1"      : { "32" : "ami-6411e20d"},
    "us-west-1"      : { "32" : "ami-c9c7978c"},
    "eu-west-1"      : { "32" : "ami-37c2f643"},
    "ap-southeast-1" : { "32" : "ami-66f28c34"},
    "ap-northeast-1" : { "32" : "ami-9c03a89d"}
  }
}
```

After you have setup this mapping, you can access it in the resources section of the template.

```json
"Resources" : {
  "myEC2Instance" : {
    "Type" : "AWS::EC2::Instance",
    "Properties" : {
      "ImageId" : { "Fn::FindInMap" : [ "RegionMap", { "Ref" : "AWS::Region" }, "32"]},
      "InstanceType" : "m1.small"
    }
  }
}
```

In this example, the `Fn::FindInMap` function will reference the AWS region you are currently working in via the globally available variable `AWS::Region` and map that region to the correct AMI that you have available for that region.

## Resources

As the previous sections were optional, the resources section is the required segment of the CloudFormation stack definition file where you declare all of the AWS resources you want as part of your stack.

In this example, we will setup a `t2.micro` EC2 instance, an S3 Bucket, and an RDS Database:

```json
"Resources": {
  "AppInstance": {
    "Type": "AWS::EC2::Instance",
    "Properties": {
      "ImageId": "ami-9c03a89d",
      "InstanceType": "t2.micro",
      "KeyName": "deploy-key"
    }
  },
  "S3AssetsBucket": {
    "Type": "AWS::S3::Bucket",
    "DeletionPolicy": "Retain",
    "Properties": {
      "BucketName": "static-assets-bucket",
      "CorsConfiguration": {
        "CorsRules": [
          {
            "AllowedMethods": [
              "GET"
            ],
            "AllowedOrigins": [
              "*"
            ]
          }
        ]
      }
    }
  },
  "Database": {
    "Type": "AWS::RDS::DBInstance",
    "Properties": {
      "AllocatedStorage": "10gb",
      "BackupRetentionPeriod": "0",
      "DBInstanceClass": "db.t2.micro",
      "DBInstanceIdentifier": "app-database",
      "DBName": "database_name",
      "Engine": "postgres",
      "EngineVersion": "9.4.5",
      "LicenseModel": "postgresql-license",
      "MasterUsername": "rootUser",
      "MasterUserPassword": "myRootUserPassword",
      "MultiAZ": "true",
      "StorageType": "gp2"
    }
  }
}
```

You can setup any number of AWS resources in the `Resources` section. Before getting started on your own resource definitions, you should read through [the Resource Type documentation](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) on Amazon's official CloudFormation documentation. Another great resource is just [digging around github](https://github.com/search?utf8=%E2%9C%93&q=cloudformation) for real world examples of CloudFormation being used in the wild.

## Outputs

The Outputs section enables you to return one or more values to the user in response to the AWS CloudFormation describe-stacks command. To declare the Outputs section, the double-quoted key name Outputs is followed by a single colon. All outputs declared in the Outputs section are contained within a single set of braces, and are delimited by a comma.

You can use this section to get quick access to facts about your stack you may find useful in the future. Instead of going to the RDS section of AWS and looking up the node that is associated with the stack you are looking for so that you can find the public DNS name, you can just set that fact up as a fact in the outputs section like below:

```json
"Outputs" : {
  "RDSDatabaseEndpointDetail": {
    "Description": "RDSDatabaseEndpointDetails",
    "Value": {
      "Fn::GetAtt": [
        "Database",
        "Endpoint.Address"
      ]
    }
  }
}
```

Outputs are evaluated as the very last step after a successful stack build. Using the example above, `RDSDatabaseEndpointDetail` will show up in the CloudFormation panel for quick reference.

![outputs](/images/2016-09-17-automate-your-aws-resources-with-cloudformation/intro-cloudformation-stack-outputs.png)

You can also get access to the outputs from the AWS CLI tool via the `describe-stacks` function.

```json
➜ aws cloudformation describe-stacks --stack-name staging | jq '.Stacks | .[0].Outputs'
[
  {
    "Description": "RDSDatabaseEndpointDetails",
    "OutputKey": "RDSDatabaseEndpointDetail",
    "OutputValue": "rds-staging.cg27inc0gx.us-west-2.rds.amazonaws.com"
  }
]
```

(You may be wondering what `jq` is. It's a really awesome command line json parser. [Check it out.](https://stedolan.github.io/jq/))

# So many things to remember!

AWS CloudFormation is an incredibly useful tool for building your AWS application stacks in a scaleable and manageable way. I've only touched the surface of introducing you to CloudFormation and as always encourage you to read through Amazon's official [docs](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html). In future posts on CloudFormation we will discuss how to automate the creation of stacks and templates using Ansible.

Have you used CloudFormation for your AWS work? If you have any questions about CloudFormation or anything in this post, please let us know in the comments!
