package com.hudsonburgess.agrilytics.soiltest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataMongoTest
public class SoilTestAggregateRepositoryImplTests {

    @Autowired
    SoilTestRepository soilTestRepository;

    @Test
    public void testMostRecentBySampleName() {
        SoilTest fc1_1 = SoilTest.builder()
                .id("fc1_1").sampleName("fc1").username("keith").testDate(new Date(2017, 5, 7))
                .build();
        SoilTest fc1_2 = SoilTest.builder()
                .id("fc1_2").sampleName("fc1").username("keith").testDate(new Date(2018, 10, 1))
                .build();
        SoilTest fc1_3 = SoilTest.builder()
                .id("fc1_3").sampleName("fc1").username("keith").testDate(new Date(2016, 9, 2))
                .build();

        SoilTest a1_1 = SoilTest.builder()
                .id("a1_1").sampleName("a1").username("keith").testDate(new Date(2016, 9, 2))
                .build();
        SoilTest a1_2 = SoilTest.builder()
                .id("a1_2").sampleName("a1").username("keith").testDate(new Date(2015, 4, 6))
                .build();

        SoilTest co_1 = SoilTest.builder()
                .id("co_1").sampleName("co").username("paul").testDate(new Date(2015, 4, 6))
                .build();
        SoilTest co_2 = SoilTest.builder()
                .id("co_2").sampleName("co").username("paul").testDate(new Date(2015, 4, 6))
                .build();

        soilTestRepository.save(fc1_1);
        soilTestRepository.save(fc1_2);
        soilTestRepository.save(fc1_3);
        soilTestRepository.save(a1_1);
        soilTestRepository.save(a1_2);
        soilTestRepository.save(co_1);
        soilTestRepository.save(co_2);

        List<SoilTest> mostRecent = soilTestRepository.findMostRecentBySampleNameForUser("keith");
        assertEquals(mostRecent.size(), 2);
        assertTrue("didn't return the most recent test for sample FC1", mostRecent.contains(fc1_2));
        assertTrue("didn't return the most recent test for sample A1", mostRecent.contains(a1_1));
        assertFalse("returned a test for the wrong user", mostRecent.contains(co_1));
    }

}
