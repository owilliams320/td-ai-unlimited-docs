---
id: docker-when-you're-done
title: When you're done
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 7
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# When you're done

["Docker down" stops Docker, but leaves everything in place, so the user can run "Docker up" and continue working.]

[If the user is really done with the QuickStart "forever," they can remove all the files.]

**TA: Moving until we find a solution**

  ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
 ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
