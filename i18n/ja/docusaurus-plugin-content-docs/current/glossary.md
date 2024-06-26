---
id: glossary
title: Glossary
description: Terminology for the installation and use of AI Unlimited.
sidebar_label: 用語集
sidebar_position: 6
---

# 用語集

## A

<a id="glo-application-load-balancer"></a>
### application load balancer

Load balancers distribute incoming traffic across servers. An application load balancer inspects incoming traffic content, such as HTTP headers and paths, to make routing decisions. You can use an application load balancer as a way to expose AI Unlimited and its engine to the public IP network.


### term

Definition


## B

### term

Definition

### term

Definition


## C

<a id="glo-cidr"></a>
### Classless Inter-Domain Routing (CIDR)

An IP address allocation method that improves data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers find each other and communicate.

<a id="glo-csp"></a>
### cloud service provider (CSP) 

A company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service, Platform as a Service, or Software as a Service. The AI Unlimited engine is deployed on your CSP. ***[true, but add that a CIDR block indicates a range]***

<a id="glo-cluster"></a>
### cluster

A group of interconnected computers that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP.


## D

### term

Definition

### term

Definition


## I

<a id="glo-iam-role"></a>
### IAM role

An [Identity and Access Management (IAM) role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) is an identity you can create in your AWS account. It has permissions policies that determine what it can and cannot do in AWS. An IAM user is unique to one user, but an IAM role can be shared by users.

### term

Definition

 
## L

<a id="glo-load-balancer"></a>
### load balancer 

A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organzation does not allow its resources to use public IP addresses, you can use a load balancer to expose AI Unlimited and its engine to the public IP network. 


## M

<a id="glo-mounting-volumes"></a>
### mounting volumes 

A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (host) to a directory within a container to share data and files between the host and container.

### term

Definition


## N

<a id="glo-network-load-balancer"></a>
### network load balancer

Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network.


## O

<a id="glo-oauth-app"></a>
### OAuth app

An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password. AI Unlimited uses an OAuth app, created by your organization, to authorize access to your GitHub or GitLab account for storing user and project information.

### term

Definition


## S

<a id="glo-systemd"></a>
### systemd

Linux foundational software for system and service management. When you deploy the AI Unlimited or JupyterLab CloudFormation template on AWS, it runs on a server instance in a container controlled by systemd.


### term

Definition


## T

<a id="glo-tls"></a>
### Transport Layer Security (TLS) 

A protocol that creates a secure connection between two parties communiating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties. 

### term

Definition