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
  OpEx stands for **Operational Expenditure**, it means that you rent the infrastructure. With this expenditure the costs are more uniform and are based off the usage of the services, since the server capacity will grow as the user base grow. The maintenance of the infrastructure is very low, and usually it includes only the operations team's cost.

|                   | CapEx       | OpEx           |
| ----------------- | ----------- | -------------- |
| Up front cost     | Significant | None           |
| Ongoing cost      | Low         | Based on usage |
| Tax deduction     | Over time   | Same year      |
| Early termination | No          | Anytime        |
| Maintenance       | Significant | Low            |
| Value over time   | Lowers      | No change      |

## Consumption-based model

In Microsoft Azure you only pay for what you use. Automatically, if nothing is used, then there's nothing to pay.

When using a virtual machine with Microsoft Azure you pay separate bills for the compute power, the storage, and the networking.

With this model you have:

- Multiple pricing components per service.
- Very granular usage measurements.

In the Azure portal, under the `Cost managment + Billing` tab, it is possible to monitor the cost of the resources that where used a certain day, month, or year.

In the `Cost Analisys` window, you can group by the service name and arrange the graph in column (stacked) to see what service costed more.

## IaaS vs PaaS vs SaaS

When we run our applications in the cloud, we can see different layers:

- Storage: Where we store the data.
- Networking: Where we connect our resources to the internet.
- Servers: The location where our code will run.
- Virtualization: To be able to run multiple programs on a server, virtual machines are created.
- Operating system: What will be inside each virtual machine: Linux or Windows.
- Middleware: The software installed in the virtual machine that is needed by our application.
- Runtime: The software needed to run our application.
- Application data: Which can be IIS or a Docker container.

We call **infrastructure** all the layers that are related to the hardware and the virtualization. This includes: storage, networking, servers, and virtualization.
We call **platform** all the layers that are required for running the applications. This includes: operating system, middleware, and runtime.
The **software** layer will be our application.

We talk about **on-premises** when we control every layer.
When Microsoft manages the infrastructure while we manage the rest, we talk about **Infrastructure-as-a-Service** (IaaS). Use cases for this configuration are: migration of workloads, test and development, storage, and backup.
If Microsoft manages the infrastructure and the platform, we talk about **Platform-as-a-Service** (PaaS). Use cases for this configuration are: development frameworks, and analytics & business intelligence.
If Microsoft manages everything, we talk about **Software-as-a-Service** (SaaS). This is the case when we buy off-the-shelf applications.

## Public, Hybrid & Private Cloud

If all our resources are deployed in the cloud we talk about **Public Cloud**. In this case some services share hardware with other customers.

| ADVANTAGES                        | DISADVANTAGES           |
| --------------------------------- | ----------------------- |
| No CapEx                          | Security and compliance |
| High availability and agility     | Ownership               |
| Pay as you go                     | Specific scenarios      |
| No hardware maintenance           |                         |
| No deep technical skills required |                         |

The exact opposite of Public Cloud is **Private Cloud**, everything run on our datacenter.

| ADVANTAGES                                        | DISADVANTAGES                       |
| ------------------------------------------------- | ----------------------------------- |
| Can support any scenario                          | Initial CapEx                       |
| Control over scenario                             | Limited agility                     |
| Can meet any security and compliance requirements | IT skills & expertise are mandatory |

In the **Hybrid Cloud** we can combine the benefits of public and private cloud.

| ADVANTAGES                       | DISADVANTAGES                       |
| -------------------------------- | ----------------------------------- |
| Great flexibility                | Can be more expensive               |
| Run legacy apps in private cloud | Complicated to manage               |
| Utilize existing infrastructure  | IT skills & expertise are mandatory |
| Meet any security requirements   |                                     |

## Azure Physical Infrastructure

A **Data Center** is a facility where all the servers used for the cloud are located. To operate, these facilities also include a power, cooling, and networking infrastructure.

One or more data centers are connected to each other with low-latency networks (max 2ms) and form a **Region**. These regions are globally distributed:

- For lower latency across the globe.
- For reducing the damage caused by disasters.

Some [services](https://azure.microsoft.com/en-us/global-infrastructure/services) are not available in all regions. We talk about _global services_ when they are not associated to a specific region.

When choosing the region for your service you can use the [azure speed test tool](https://www.azurespeed.com/Azure/Latency).

An **Availability Zone** is a grouping of one or more physically separated facilities. It is designated to protect from data center failures. Services can be:

- Zonal: If you can choose the availability zone where your service can be deployed.
- Zone-redundant: If we can replicate our data in multiple availability zones.

Not all regions support availability zones. A region must have at least three zones to support availability zones.
To prevent region-level failures, Microsoft has also **Region Pair**: a pair of regions that are separated by at least 300 miles and resides within the same geography. Region pairs are static and cannot be chosen. Some services have _platform-provided replication_: with them, you can replicate the data across multiple regions.
To prevent errors, updates are first rolled out in one region and then in the other.

A **Geography** contains two or more regions and ensures data residency, sovereignty, resiliency, and compliance requirements are met. Geographies are fault tolerant against region wide failures.
