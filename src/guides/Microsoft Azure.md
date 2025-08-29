---
title: Microsoft Azure Fundamentals (AZ-900)
description: Notes for the AZ-900 Microsoft Azure Fundamentals certification
language: Azure
published: true
---

Resources used to prepare for the AZ-900 Microsoft Azure Fundamentals certification are:

- [Adam Marczak - Azure for Everyone](https://marczak.io/az-900/)

# Module 1 - Describe Cloud Concepts

## Cloud computing

Cloud computing is a **delivery model** for various services over the internet. The four main services are:

- Storage: And all the related services (backup, recovery, etc.)
- Computing power: With a Windows, or Linux, or web container.
- Networking: For connecting services and users.
- Analytics: For processing and analyzing data.

Cloud computing also have some key characteristics:

- Scalability: It's the ability to _scale_. There are two types of scalability:
  - **Vertical scaling**: Adding more power (CPU, RAM) to an existing machine.
  - **Horizontal scaling**: Adding more machines to a pool of resources.  
    With cloud computing you can easily _scale up_ (more power) or _scale down_ (less power) or _scale out_ (more machines) or _scale in_ (fewer machines).
- Elasticity: It's the ability to allocate the right amount of resources based on the workload of the service. If this process is automatic, it's called **automatic scaling**.
- Agility: There are two ways of setting up a cloud computing service: manually or automatically. Agility is the time needed to request those resources. With cloud computing, unlike with on-premises infrastructures, this time is on the orders of minutes or hours.
- Fault tolerance: Cloud services will be distributed across multiple remote servers and stored in redundant disk arrays. This way, if a server or disk fails, no data will be lost.
- Disaster recovery: A disaster is a serious disruption of services caused by natural or human-induced causes. To avoid data loss in these scenarios, it is possible to deploy copies of our services in multiple Azure regions. If a region fails, the DNS will automatically redirect all **the** traffic from that region to another one.
- High availability: Availability it's the ratio between the time the service is up and the total time. Often, a minimum value for the availability of the service is specified. High availability stands for having the services run for very long times with very little downtime.

## Economics of scale

Since large companies, like Microsoft, buy resources for data centers in large bulks, they are able to lower the price per units of cloud services.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dummies.com%2Fwp-content%2Fuploads%2F274803.image0.jpg&f=1&nofb=1&ipt=061bb24eb57bddc72fd2aee1181693b4c9db0311b05959e48cc3d806cf030cb9" alt="Economics of scale in cloud computing" />

## CapEx vs OpEx

CapEx stands for **Capital Expenditure**, it means that you own the infrastructure. With CapEx you have a high initial cost, for buying the resources, followed by low maintenance costs. A limitation of CapEx is the server capacity:

- With low user base: It means we have wasted resources and high maintenance costs for the hardware.
- With high user base: It means we will have a drop in the performance of our services.
  So, with CapEx, you must be able to predict the user base of your services.
  OpEx stands for **Operational Expenditure**, it means that you rent the infrastructure. With this expenditure the costs are more uniform and are based off the usage of the services, since the server capacity will grow as the user base grow. The maintenance of the infrastructure is very low and usually it includes only the operations team's cost.

|                   | CapEx       | OpEx           |
| ----------------- | ----------- | -------------- |
| Up front cost     | Significant | None           |
| Ongoing cost      | Low         | Based on usage |
| Tax deduction     | Over time   | Same year      |
| Early termination | No          | Anytime        |
| Maintenance       | Significant | Low            |
| Value over time   | Lowers      | No change      |

## Consumption-based model

WIP
