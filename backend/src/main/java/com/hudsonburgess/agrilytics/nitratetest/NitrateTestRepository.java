package com.hudsonburgess.agrilytics.nitratetest;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface NitrateTestRepository extends MongoRepository<NitrateTest, String> {

    List<NitrateTest> findByUsernameAndSampleName(String username, String sampleName);

}
