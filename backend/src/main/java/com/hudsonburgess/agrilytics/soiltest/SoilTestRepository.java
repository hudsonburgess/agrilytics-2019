package com.hudsonburgess.agrilytics.soiltest;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SoilTestRepository extends MongoRepository<SoilTest, String>, SoilTestAggregateRepository {

    List<SoilTest> findByUsernameAndSampleName(String username, String sampleName);

}
