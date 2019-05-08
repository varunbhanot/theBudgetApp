FROM openjdk:13-ea-16-jdk-alpine3.9
LABEL Mantainer="varunbhanot@gmail.com"

ADD ./target/expense-manager-0.0.1-SNAPSHOT.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/expense-manager-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080
