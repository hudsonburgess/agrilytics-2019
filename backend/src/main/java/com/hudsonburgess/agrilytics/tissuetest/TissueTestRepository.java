package com.hudsonburgess.agrilytics.tissuetest;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface TissueTestRepository extends MongoRepository<TissueTest, String> {

    List<TissueTest> findByUsernameAndSampleName(String username, String sampleName);

}
