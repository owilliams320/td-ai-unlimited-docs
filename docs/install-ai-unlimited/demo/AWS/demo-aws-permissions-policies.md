---
id: demo-aws-permissions-policies
title: Teradata - AI Unlimited - Demo - AWS - Create custom policies for an IAM role
description: Learn how AWS IAM roles and policies impact the Teradata AI Unlimited deployment.
sidebar_label: Create custom policies for an IAM role
sidebar_position: 5
---

# Create custom policies for an IAM role

Configure roles and policies with the necessary permissions to provide AI Unlimited access to the AWS resources. ***Is this topic just about policies or roles as well?*** ***TA: Roles and policies***

:::note 
If your AWS account does not have sufficient IAM permissions to create IAM roles and policies, your cloud administrator can define the roles and policies and pass them to the CloudFormation template. 
:::

***Is this topic about defining the roles and policies in order to pass them to the CFT? Probably not. It's about how to create them in the console. The above para must be the workaround.*** ***TA: If users don't have access to create own roles, then they should go through IT. If they do have access, they can create new roles via the Console.***

For detailed instructions, see [Creating roles and attaching policies (console) - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html).

Attach the required IAM policies to an IAM role:

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): This JSON sample includes permissions needed to create AI Unlimited instances and grants AI Unlimited the permissions to create cluster-specific IAM roles and policies for the engine.

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-without-iam-role-permissions.json): This JSON sample includes the permissions needed to create AI Unlimited instances. If your account restrictions do not allow AI Unlimited to create IAM roles and policies, then you must provide an IAM role with a policy to pass to the engine. In this case, you can use this modified policy, which does not include permissions to create IAM roles or IAM policies.

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): This JSON sample includes the permissions needed to interact with the AWS Session Manager. If you use AWS Session Manager to connect to the instance, you must attach this policy to the IAM role.

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): If you pass the AI Unlimited IAM role to a new engine instead of allowing AI Unlimited to create the cluster-specific role, you can use this JSON sample as a starting point to create your policy.

When AI Unlimited creates policies for the engine ***[But the topic says the user creates the policies. And, if they are for the engine, does that mean they grant the engine access to the AWS resources (see first para).]***, they are restricted as follows: 
***TA: AI Unlimited can pass its own role and policies to the engine or can create new ones for the engine. The last policy is related to how AI Unlimited passes the policies to engine, and hence the statement when AI Unlimited creates policies for engine.... Other ones are about creating AI Unlimited instances.***

```bash
"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
```

If you provide an IAM role and policy,***"if" - what is the opposite? Just 1 policy, not 4?*** then you can't predict the cluster name, and to avoid the situation, you can use wildcarding in the replacement policy, such as:

``` bash
"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
or
"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
or
"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
```

***So are we asking them to create 1 role? 1 role with 4 policies attached?***