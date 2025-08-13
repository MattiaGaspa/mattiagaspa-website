---
title: Introduction to Maven
description: These notes are a brief tutorial on Maven. Mainly useless since everything is now managed by IDE (e.g. IntelliJ) but still useful to understand the basics.
language: Maven
published: true
---

Maven is used to manage dependencies and the process of compiling and executing a Java project.

# Project Creation

The project is created using the [archetype](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html) **quickstart** and the command

```bash
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5 -DinteractiveMode=false
```

The project folder will then be created, in this case `my-app`, which will include the file [`pom.xml`](https://maven.apache.org/ref/3.9.9/maven-model/maven.html):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>

 <groupId>com.mycompany.app</groupId>
 <artifactId>my-app</artifactId>
 <version>1.0-SNAPSHOT</version>

 <name>my-app</name>
 <!-- FIXME change it to the project's website -->
 <url>http://www.example.com</url>

 <properties>
   <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
   <maven.compiler.release>17</maven.compiler.release>
 </properties>

 <dependencyManagement>
   <dependencies>
     <dependency>
       <groupId>org.junit</groupId>
       <artifactId>junit-bom</artifactId>
       <version>5.11.0</version>
       <type>pom</type>
       <scope>import</scope>
     </dependency>
   </dependencies>
 </dependencyManagement>

 <dependencies>
   <dependency>
     <groupId>org.junit.jupiter</groupId>
     <artifactId>junit-jupiter-api</artifactId>
     <scope>test</scope>
   </dependency>
   <!-- Optionally: parameterized tests support -->
   <dependency>
     <groupId>org.junit.jupiter</groupId>
     <artifactId>junit-jupiter-params</artifactId>
     <scope>test</scope>
   </dependency>
 </dependencies>

 <build>
   <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
   ... Various helpful plugins
   </pluginManagement>
 </build>
</project>
```

Where the attributes are defined within the `object` element:

- `modelVersion`: the version of POM we are using. This number rarely changes;
- `groupId`: a unique identifier used to define the company that created the project. It is the domain name of the organization;
- `artifactId`: the name of the project's main program. Typically, this is a `<artifactId>-<version>.jar` file (it can also have extensions other than `.jar`);
- `version`: this is the version of the artifact being created in this project. If you have `SNAPSHOT` in the version, it means that the project is under development;
- `name`: this is the name under which the project will be known. It is used to generate documentation;
- `url`: indicates the project website;
- `properties`: indicates various values that are accessible within the entire POM;
- `dependencies`: lists all the project dependencies;
- `build`: this element is responsible for defining the project structure and managing the various plugins.

The structure of the project will be as follows::

```shell
my-app
├── pom.xml
└── src
   ├── main
   │   └── java
   │       └── com
   │           └── mycompany
   │               └── app
   │                   └── App.java
   └── test
       └── java
           └── com
               └── mycompany
                   └── app
                       └── AppTest.java
```

# Project compilation

The project is compiled using the command:

```bash
mvn compile
```

After downloading all plugins and dependencies, if they are not already present in the system, it will place the compiled files in `${project.basedir}/target/classes`.

# Run unit tests

To run the unit tests, use the command:

```bash
mvn test
```

Maven will then download development dependencies, in addition to those required for the project, and recompile the main code to run the tests, including all changes made since the last `mvn compile`. If you only want to compile without running the tests, the command is:

```bash
mvn test-compile
```

# Create a JAR and install it locally

The JAR file is created using the command:

```bash
mvn package
```

The file will be placed in the `${project.basedir}/target` directory.
To install the project in the local [repository](https://maven.apache.org/guides/introduction/introduction-to-repositories.html), located in `$HOME/.m2/repository` by default, you must execute:

```bash
mvn install
```

To generate the project website, which will be located in `${project.basedir}/target/site`, use the command:

```bash
mvn site
```

And to clean up all files generated from the source, use the command:

```bash
mvn clean
```
