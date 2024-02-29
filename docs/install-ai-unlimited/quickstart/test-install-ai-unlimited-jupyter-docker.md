---
id: test-install-ai-unlimited-jupyter-docker
title: Teradata - AI Unlimited - test deploy AI Unlimited and JupyterLab using Docker
description: Learn how to install AI Unlimited and JupyterLab using Docker.
sidebar_label: Install AI Unlimited and JupyterLab using Docker 
sidebar_position: 8
tags:
  - Install AI Unlimited
  - Install using Docker
  - Production
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install AI Unlimited and JupyterLab using Docker

***MEM: Based on a review comment from Jack about the word "install" not applying well to the Quick Start, maybe we should call this topic "Set up a local environment for AI Unlimited and JupyterLab"***
**TA: How about "Run AI Unlimited and JupyterLab in a Docker Container" or "Run AI Unlimited and Jupyter locally using Docker Compose"**

Use [Docker Compose](https://docs.docker.com/compose/) to install AI Unlimited and JupyterLab. 

***MEM: The first sentence could then be "Use Docker Compose to set up a containerized environment in which to run AI Unlimited and JupyterLab, with the AI Unlimited Jupyter Kernel." Think that would work?***

**TA: How about: Use Docker Compose to define a multi-container environment locally in which you can run AI UNlimited and JupyterLab, with AI Unlimited Jupyter Kernel. - Do we need the text after JupyterLab?**

1. Open a terminal window and clone the Teradata AI Unlimited GitHub repository. It includes sample YAML files to run AI Unlimited and JupyterLab.

***MEM: Should we tell them to first go to the directory where they want to put the repo, and then clone?***
**TA: Not required, as it the folder is downloaded to the user's default path**

``` bash
git clone https://github.com/Teradata/ai-unlimited
```
2. Optionally, set the environment variable `AI_UNLIMITED_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/ai-unlimited**.

***MEM: How about "the directory where you want the configuration and data files to be located"? Because those things are not there yet, and it helps reinforce that this is an alternative to the default.***

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
    | $AI_UNLIMITED_HOME/tls | /etc/td/tls | Stores certificate files |

3. Optionally, set the `JUPYTER_HOME` variable to the directory where the JupyterLab configuration files are located. The default location is **~/.jupyter**.

4. Copy these environment variables from your [CSP](/docs/glossary.md#glo-csp) console or use the CLI. 

***How about saying "...environment variables for storing your CSP credentials..." so they don't have to infer that from reading the variables on the tabs or click the more-info link--so they can know right away.***

***So this is how they get the variable values, but they are hidden, right?***
**TA: No, not hidden.**

<Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    Learn about AWS [environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
  
</TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    Learn about Azure [environment variables](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
  
</TabItem>
    </Tabs>

:::note 
You can provide the environment variables to Docker Compose by either [mounting them as volumes](/docs/glossary.md#glo-mounting-volumes) or using an environment variable file. This quickstart uses a YAML file that contains the environment variables to store your CSP credentials. For other options, see [AI Unlimited GitHub: Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

5. In the cloned Teradata AI Unlimited GitHub repository, open the [CSP]-credentials-env-vars.yaml file and update the environment variable values.

6. Go to the directory where the **ai-unlimited.yaml** and **jupyter.yaml** files are located, and start AI Unlimited and JupyterLab.

:::note
Teradata recommends running Docker Compose in detached mode (-d) so that the command doesn't block the terminal window.
:::

  <Tabs>
    <TabItem value="aws" label="AWS" default>

```bash title="Run the Docker Compose file in the background "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
```
In detached mode, the Jupyter token is not displayed on the terminal window. Retrieve the Jupyter token:

***MEM: Wondering if the sentence about the token not automatically appearing is necessary. Even if they are surprised about not seeing the token, right away they'll see "Retrive the token:" and the steps. What do you think?***
**TA: Better to let the user know why they should retrieve. Reason: The token is required only when a user tries to access the Jupyter link (after the last step). If we tell the users why they need to retrieve and the steps to retrieve, they would pay attention to the step else they might ignore it and go to the compose up step.**

a. List the currently running containers, and identify the name of the JupyterLab container.

```bash
docker ps 
```
b. Search for occurrences of the string 'Token' in the container's logs.

```bash
docker logs <container_name> | grep 'Token'
```

```bash title="Run the Docker Compose file in the foreground "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml up 
```

**TA: Foreground/background is a personal preference, and users can choose to run in either of the two modes. At the start of the tab, we recommend users use the -d mode. Again, these are options, the tab wouldn't make sense; I thought it collapsible, but we don't have enough content to justify the use of the collapse option. I thought the heading was clear. May be we can rethink**

 ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```

</TabItem>
    <TabItem value="azure" label="Azure">
	
  ```bash title="Run the Docker Compose file in the background "
docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
```

In detached mode, the Jupyter token is not displayed on the terminal window. Retrieve the Jupyter token:

a. List the currently running containers, and identify the name of the JupyterLab container.

```bash
docker ps 
```
b. Search for occurrences of the string 'Token' in the container's logs.

```bash
docker logs <container_name> | grep 'Token'
```

  ```bash title="Run the Docker Compose file in the foreground "
docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml up 
```

  ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
 </TabItem>
    </Tabs>

The command downloads and starts AI Unlimited and JupyterLab containers. When AI Unlimited is ready, you can access it at **http://localhost:3000**. When JupyterLab is ready, you can access it at **http://localhost:8888** and enter the token. 
