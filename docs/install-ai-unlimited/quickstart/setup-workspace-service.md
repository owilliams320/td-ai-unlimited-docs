---
id: setup-workspace-service
title: Setup Workspace Service
description: Steps to setup workspace service
sidebar_position: 5
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup Workspace Service

1. Access workspace service using the URL: http://*`ip_or_hostname`*:3000/.

    Insert image

2. Apply the following general service configuration under **Setup**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | Service Base URL | **`[Non-Editable]`** The root URL of the service. | Yes |
    | Git Provider | The provider for Git integration. Currently, Teradata AI Unlimited supports GitHub and GitLab. | Yes |
    | Service Log Lev | The level of logging.| Yes|
    | Engine IP Network Type | The type of network assigned to an engine instance, which can be either public or private. Select the **Private** option if you're deploying the engine in the same VPC as the workspace service.| Yes |
    | Use TLS | Indicates if TLS support is enabled. If your instance is only accessible from within a private network and to trusted users, you can ignore the default value. Teradata recommends enabling the TLS option for sensitive data, public networks, and compliance requirements. | Yes |
    | Service TLS Certification | The server certificate to authenticate the server identity. | No |
    | Service TLS Certificate Key | The server certificate key. | No |

3. To use a self-signed certificate for **Service Base URL**, select **GENERATE TLS**. A certificate and private key are generated and displayed in the respective fields.

4. Select **Save Changes**.

5. Apply the following settings under your choice of **Cloud Integrations: CSP**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | Default Region | The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location. | Yes |
    | Default Subnet | The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet. | Yes |
    | Default IAM Role | The default IAM identity that determines what a user can and cannot do in AWS. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role. | No |
    | Resource Tag | The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the resources you use in your environment. | No |
    | Default CIDRs | The list of Classless Inter-Domain Routing (CIDR) addresses used for the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR. | No |
    | Default Security Groups | The list of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC. | No |
    | Role Prefix | The string of characters prepended to the name of a role. You can use a role prefix to organize and manage roles and to enforce naming conventions. | No |
    | Permission Boundary | The maximum permissions an IAM entity can have regardless of the permissions defined in the identity-based policy. You can define and manage the user permissions and roles and enforce compliance requirements. | No |

6. Select **Save Changes**.
7. Apply the following settings under **Git Integrations**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | GitHub Client ID | The Client ID you received from GitHub on creating your OAuth App. | Yes |
    |GitHub Client Secret | The Client secret ID you received from GitHub on creating your OAuth App. | Yes |
    | Auth Organization | The name of the GitHub organization account that you use to collaborate with your team. | No |
    | GitHub Base URL | The base URL of your GitHub account. The URL may vary based on your account type. For example, https://github.company.com/ for GitHub Enterprise account. | No |

8.	Select **Authenticate**. You are redirected to GitHub.

9.	Log on with your GitHub credentials to authorize workspace service.

    After authentication, you are redirected to the Workspace service **Profile** page, and an API Key is generated. You can use the API Key to make requests to the workspace service.

:::note
 A new API Key is generated each time you connect to workspace service.
:::