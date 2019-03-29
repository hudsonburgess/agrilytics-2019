package com.hudsonburgess.agrilytics.soiltest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;

import java.util.List;

public class SoilTestAggregateRepositoryImpl implements SoilTestAggregateRepository {

    @Autowired MongoTemplate mongoTemplate;

    public List<SoilTest> findMostRecentBySampleNameForUser(String username) {
        MatchOperation matchByUsername = Aggregation.match(new Criteria("username").is(username));
        SortOperation sortByTestDateDesc = Aggregation.sort(new Sort(Sort.Direction.DESC, "testDate"));
        GroupOperation groupBySampleName = Aggregation.group("sampleName").first(Aggregation.ROOT).as("mostRecentTest");
        ReplaceRootOperation replaceGroupWithLatestTest = Aggregation.replaceRoot("mostRecentTest");
        SortOperation sortBySampleName = Aggregation.sort(new Sort("sampleName"));


        Aggregation aggregation = Aggregation.newAggregation(matchByUsername, sortByTestDateDesc, groupBySampleName, replaceGroupWithLatestTest, sortBySampleName);
        AggregationResults<SoilTest> results = mongoTemplate.aggregate(aggregation, "soiltests", SoilTest.class);
        return results.getMappedResults();
    }

}
