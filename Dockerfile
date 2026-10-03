FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY backend/pom.xml backend/pom.xml
RUN mvn -f backend/pom.xml dependency:go-offline -B
COPY backend/src backend/src
RUN mvn -f backend/pom.xml clean package -DskipTests -B
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/backend/target/healthcare-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["sh","-c","java -jar app.jar"]
