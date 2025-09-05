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

## Resource Management

A **Resource** in Azure is a service, for example: a SQL database, a virtual machine, etc. It's an object used to manage services in Azure and to represent their lifecycle. Every resource is represented as a JSON file.

A **Resource Group** is required to create a new resource in Azure. A resource group is a group of logically related services. Services can be related by:

- Type: For example, a group for all database services, and a group for all virtual machines.
- Lifecycle: For example, a group for development services, and a group for production services.
- Department.
- Billing, location, or a combination of those.

We can create a resource group from the Azure portal by clicking on the _Resource Groups_ section. Then, after clicking _Create_, we need to provide:

- The subscription.
- The name of the resource group.
- The location: However, inside you can have services from other regions too.

Resource groups are free. From the resource group's page, inside the _Access Control (IAM)_ section, we can also add roles for managing resources.

Another way to manage Azure resources is through the command line. We log in with the command:

```bash
az login
```

At this point, a resource group can be created with the command:

```bash
az group create --name <group-name> --location "west europe"
```

Now we can create a resource inside a resource group with the command:

```bash
az storage account create --name <storage-name> --resource-group <group-name> --location "west europe"
```

The portal to access the JSON of all the resources can be found [here](https://resources.azure.com).

Resources can be moved from resource group to resource group. resource group cannot be stacked.

A **Resource Manager** is a service that governs and is responsible for all the resources in Azure. It receives commands from:

- Web Portal.
- REST calls.
- PowerShell or CLI applications.
- SDKs.
  The Azure Resource Manager also interfaces with **Azure Active Directory** (Azure AD) to verify your privileges when performing an action.

# Module 2 - Describe some of the core products available in Azure

## Compute services

**Compute services** are a category of on-demand services used to run cloud-based applications.

_Virtualization_ is the ability to emulate physical machines to separate applications from one another. In Microsoft Azure you can create a virtual machine:

- From a marketplace image (for example: Windows, Ubuntu).
- From a custom image you build yourself.

**Virtual machines** are IaaS and give you total control over the operating system. A virtual machine can be created easily from the portal. When creating one you need to provide:

- The resource group name.
- A name and region for the virtual machine.
- The image: Selected from the drop-down menu.
- The size: Compute power and RAM.
- An administrator username and password.
- Public ports: For later configuration.

The only way to scale a single virtual machine is vertically (by adding more compute power). With **Virtual Machine Scale Sets** (VMSS) you can replicate an image across multiple virtual machines; a load balancer will redirect traffic so all VMs are used evenly. The number of virtual machines can be static or can autoscale, meaning Azure will create more VMs when traffic increases and delete them when traffic decreases.

To reduce maintenance work for virtual machines, you can use **containers**. A container is a sandboxed environment for an application that runs inside a container runtime. Because containers do not require a full OS for each instance, they are more lightweight.

In Azure, we have **Container Instances**: after hosting an image of your application in a container registry, you can deploy it as a container instance. Container Instances are PaaS and are often used for small/simple apps and background jobs. When creating a container instance in the portal you need to provide:

- The resource group name.
- A name and region for the container.
- The image source and its location.
- The size of the container.

**Azure Kubernetes Service** (AKS) is an open-source container orchestration platform that spreads your application image across multiple nodes. A node is a VM that runs containers. Kubernetes provides load balancing to distribute traffic among nodes; the number of nodes can be static or autoscaled.

To further reduce application maintenance, use **App Service**. After packaging your application, you can deploy it to an App Service that provisions the necessary nodes to run the app. App Service is PaaS and supports multiple programming languages and containers. To create an App Service from the portal (choose Web App) you must provide:

- The resource group name.
- A name for the App Service.
- The runtime stack: For example Node.js, Python, etc.
- The operating system and region.
- The App Service plan/size.

Deployment of a web app can be done from Visual Studio Code using the Azure extension.
**Azure Functions** (**Function Apps**) let you run small pieces of code as serverless web services. Azure Functions are built on Azure App Service and are serverless because you don’t manage the underlying server. There are two pricing models:

- Consumption-based: you pay for what you use.
- Dedicated plan.

Azure Functions are designed for micro- and nano-services.

To summarize:

| Solution            | Service | Configuration Control/Maintenance | Autoscaling | Min Nodes | Max Nodes | Scalability |
| ------------------- | ------- | --------------------------------- | ----------- | --------- | --------- | ----------- |
| Virtual Machines    | IaaS    | Highest                           | No          | 1         | 1         | Lowest      |
| VM Scale Sets       | IaaS    | Highest                           | Yes         | 1         | 1000/600  | Highest     |
| Container Instances | PaaS    | Medium                            | No          | 0         | 20        | Low         |
| Kubernetes Service  | PaaS    | High                              | Yes         | 3         | 100       | High        |
| App Service         | PaaS    | Low                               | Yes         | 1         | 20/100    | Medium      |
| Functions           | PaaS    | Lowest                            | Yes         | 0         | 200       | High        |

Since it's not easy to choose which to use, Microsoft has created a _compute decision flow_:

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flearn.microsoft.com%2Fen-us%2Fazure%2Farchitecture%2Fguide%2Ftechnology-choices%2Fimages%2Fcompute-choices-v-2.png&f=1&nofb=1&ipt=bd347eeb85a16f4011256fdb17a5b8b6c8aac53ecf0d8bc867f180b2c55509bc" alt="Compute decision flow" />

## Networking Services

Networking services are a category of services that can:

- Connect cloud and on-premises infrastructure.
- Protect and monitor other services.
- Help application delivery.

An **Azure Virtual Network** is an emulation of physical networking infrastructure that allows you to connect cloud resources. A virtual network can be divided into **subnets**:

- To group related resources together.
- To provide IP addresses.

A virtual network can only reside within a single region. To connect one or more virtual networks together, even if they are not in the same region, you can use:

- VNet peering: With this, the two virtual networks will behave as one.
- VPN gateway: This allows you to connect to your on‑premises environment. The communication will be encrypted.

Given a virtual machine with its own subnet inside a virtual network, you can control the traffic coming from the Internet to the virtual machine with a **Network Security Group**. Network security groups can also be used to manage traffic between subnets.

In the Azure portal you can create a virtual network by providing:

- The resource group name.
- The name and region of the virtual network.
- The IPv4 address space: By default 10.1.0.0 -> 10.1.255.255.
- A default subnet will be created as well.
- Next, other Azure services can be enabled: Bastion Host, DDoS protection, and Firewall.

When creating a virtual machine, a virtual network with default settings will be created. From the virtual machine resource page, by typing Diagram, you can see the current networking infrastructure.

The **Azure Load Balancer** is used to distribute traffic among two or more virtual machines. With a single virtual machine, Microsoft guarantees 99.9% availability. By placing two virtual machines in two separate regions and connecting them with a load balancer, Microsoft will guarantee 99.99% availability.

A common practice is to separate virtual machines into tiers:

- Web tier: A load balancer directs traffic from the Internet to the virtual machines that serve web requests. This is called a **public load balancer**, because it has a public IP to receive traffic from outside.
- Data tier: Another load balancer redirects traffic from the web tier to the virtual machines that handle data. This is called an **internal load balancer**, because it has a private IP to allow communication only within the virtual network.

For web traffic (HTTP/HTTPS), replace the Azure Load Balancer with an **Azure Application Gateway**, which is built for managing web traffic. The Application Gateway can also be used with App Service. Some features of the Application Gateway are:

- Redirection.
- Affinity: Ensures the same client is routed to the same virtual machine on subsequent requests.
- URL routing.
- SSL termination: Converts inbound HTTPS traffic from the Internet to unencrypted HTTP for communication inside the virtual network.

A **Content Delivery Network** (CDN) is used to minimize the latency of web applications. This is achieved by caching and distributing content at POPs (Points of Presence).

## Storage Services

The data that will be saved on Microsoft servers can be:

- Structured data: When the data can be described by a schema. For example: a relational database.
- Semi-structured data: When the data can be arranged in a table but does not have to follow a strict schema. Often only one column is common to every record and is used to identify the data saved in that row.
- Unstructured data: When the data is a file, an image, etc. These are often called **blob** (Binary Large OBject).

**Azure Blob Storage** contains one or more containers that are used to store blobs. There are three storage tiers:

- Hot: For frequently accessed data.
- Cool: For data that is accessed infrequently.
- Archive: For data that is rarely used.

**Azure Queue Storage** is used to store small pieces of data, called _messages_, that will be consumed in the same order they arrived.

**Azure Table Storage** is a semi-structured (_NoSQL_) store for tables. It is designed for fast access to data.

**Azure File Storage** is similar to blob storage:

- Containers are called _shares_.
- Blobs are called _files_.

They are almost identical except for the access method: with file storage you access files using the SMB protocol.

**Azure Storage Account** includes all the storage services described above. It offers high durability (11 nines, up to 16 nines) and high scalability (orders of petabytes).

In the portal, you can create a storage account by providing:

- The resource group name.
- A name and a location for the account.
- The account kind and the replication.
- The access tier: Hot or Cold.

From the storage account resource you created, you can see the four storage types:

- Containers.
- File shares: Microsoft provides an out-of-the-box script to connect to these shares.
- Tables.
- Queues.

You can review everything saved in the storage account by opening _Storage Explorer_ from the storage account page.

**Azure Disk Storage** is a disk emulation in the cloud. It is used for persistent storage for virtual machines and comes with different:

- Sizes.
- Types: SSD or HDD.
- Performance tiers.

Disks can be unmanaged (each disk is stored as a file on blob storage) or managed.

## Database Services

**Azure Cosmos DB** is similar to Azure Table Storage. It is a schema-less (_NoSQL_) database that is made of _collections_ (while Table Storage has tables). Another difference is that Cosmos DB can be easily replicated, and you are able to write to your closest replica of the database for the lowest latency.

The database can be accessed with multiple APIs (SQL, MongoDB, etc.).

**Azure SQL Database** is a database organized into tables that follow a specific schema. It is a PaaS, often called DBaaS (Database-as-a-Service), with rich query capabilities (SQL).

The Azure SQL product family consists of:

- **Azure SQL Database**.
- **Managed Instance**: Use this if you need the full capabilities of SQL Server in the cloud.
- **SQL Data Warehouse**: Used for massive parallel processing operations.
- **SQL VM**: SQL Server as IaaS.
- **DB for MySQL**: Azure-managed database with the MySQL engine.
- **DB for PostgreSQL**: Azure-managed database with the PostgreSQL engine.

In the Azure portal, to create a database search for _SQL database_ and provide:

- The resource group name.
- The database name.
- Select a server, or create a new one by providing a name, the administrator username and password, and the region.
- Select the performance tier for the SQL database.

In the database _Query editor (preview)_ page you can, after logging in with username and password, edit queries (you may need to whitelist your IP address in the firewall).

## Azure Marketplace

**Azure Marketplace** is like an online store: you search for what you need and then purchase the solution. You can also find third‑party solutions there.

In Azure Marketplace you don't need to pay for licenses directly, since license costs are automatically charged to your Azure account.

All products available in the portal's marketplace can also be found at [here](https://azuremarketplace.microsoft.com/en-us/).

The **Commercial Marketplace** consists of:

- _Azure Marketplace_: Contains Azure-focused products and is aimed at developers and IT professionals.
- _Microsoft AppSource_: Contains products for Azure, Power BI, Dynamics 365, and Office 365 and is aimed at business users.

# Module 3 - Describe some of the solutions available on Azure

## IoT Services

**Internet of Things (IoT)** is a network of _internet-connected devices_ embedded in everyday objects that send and receive data such as settings and telemetry.

**Azure IoT Hub** is a PaaS that enables bidirectional communication between the cloud and IoT devices. Multiple communication protocols are supported (HTTPS, AMQP, MQTT). It also lets developers monitor and analyze devices through several SDKs.

To simulate IoT devices you can use the Raspberry Pi Azure IoT Online Simulator: [Raspberry Pi Azure IoT Online Simulator](https://azure-samples.github.io/raspberry-pi-web-simulator). In the Azure portal, create an IoT Hub by providing:

- The resource group name.
- The name and region of the IoT Hub.

To register a device with the IoT Hub, open the IoT Hub resource page and go to the _IoT Devices_ section. To create a new device provide a device ID (other settings remain at their defaults). To connect the device to the hub, copy the _Primary connection string_ into the Raspberry Pi code.

**Azure IoT Central** is a SaaS solution that provides similar capabilities to Azure IoT Hub but also includes templates and a higher-level application platform. Use IoT Central when you prefer not to build the application from scratch.

**Azure Sphere** is a set of components for building secure IoT solutions. Hardware vendors create microcontrollers that follow Microsoft's _Sphere MCU_ standard. Microsoft provides an operating system for these embedded devices, and both Microsoft and developers can apply updates and manage security through the _Azure Sphere Security Service_.

## Big Data & Analytics

**Big Data** is a field that helps with extraction, processing, and analysis of information that is too large or complex for traditional software. How this is done depends on:

- Frequency: How fast we want to process the data. From slowest to fastest: Batch, Periodic, Near Real Time, Real Time.
- Volume: How big the data is that we need to process.
- Variety: The types of data we need to process.

When working with data, developers first identify where the data is located (database, file, service) and then _ingest_ the data from the source to the cloud. After transforming the data, they store it and then serve it so customers can benefit from it.

**Azure Synapse Analytics** is a PaaS that provides various tools for each step of this process:

- _Azure Synapse Pipeline_: Used to ingest and transform data with visual workflows.
- _Apache Spark_.
- _Synapse SQL_: A parallel-processing database cluster that helps with transformations using SQL queries and allows you to serve the data.

These three tools are available in _Synapse Studio_, so you have everything for transforming data in one place. Synapse Studio is integrated with _Azure Data Lake Storage Gen2_.

**Azure HDInsight** is a PaaS where you can choose from multiple technologies (Hadoop, Kafka, Spark, Hive, Storm, etc.) and Microsoft will manage Big Data clusters for you.

**Azure Databricks** is a PaaS that provides Big Data clusters with _Apache Spark_ to help transform data at large scale.

In the Azure portal, after creating an Azure Databricks resource, you can enter the Databricks workspace by launching it. Inside, you can create clusters and then create scripts in your personal workspace or a shared workspace. When creating a _notebook_ you are prompted to choose a language (Python, Scala, R) and a cluster; you can then write and run code in executable cells.

## Artificial Intelligence

**Artificial Intelligence** is the simulation of human intelligence by computer software. **Machine Learning** is a subcategory of AI where the computer is taught to draw conclusions and make predictions from data.

The process for developing machine learning products involves the cycle:

- Training.
- Packaging.
- Validation.
- Deployment.
- Monitoring.

**Azure Machine Learning** is used to create new machine learning models and is composed of a set of tools that allow you to:

- Write notebooks in Python or R.
- Use a visual designer to build machine learning models.
- Manage compute resources.
- Determine which algorithm performs best (_AutoML_).
- Build end-to-end solutions with _pipelines_.

Azure Machine Learning, like Azure Databricks, has its own portal.

## Serverless Computing

_Serverless Computing_ is a cloud-hosted execution environment that allows customers to run their applications in the cloud while completely abstracting the underlying infrastructure.

**Azure Functions** is a serverless coding platform (Function as a Service, FaaS) where we can design and build nano services and event-based applications. It's a highly scalable service and supports a wide variety of languages and frameworks.

**Azure Logic Apps** (PaaS) allows you to build apps by using a visual workflow that can be triggered from a web request, from an email, from an Office 365 event, etc. The logic apps are created from the _Azure Logic App Designer_.

**Azure Event Grid** is a fully managed serverless event routing service. It uses a _publish-subscribe_ model:

- Applications send **topics** to the Event Grid.
- The Event Grid then notifies other services that are subscribed.

It is designed for event-based and near-real-time applications.

## DevOps Solutions

WIP
