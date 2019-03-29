package com.hudsonburgess.agrilytics;

import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
public class AgrilyticsMongoConfig extends AbstractMongoConfiguration {

    @Override
    protected String getDatabaseName() {
        return "agrilytics_2019";
    }

    @Override
    public MongoClient mongoClient() {
        return new MongoClient();
    }

}
