package com.hudsonburgess.agrilytics.soiltest;

import java.util.List;

public interface SoilTestAggregateRepository {

    List<SoilTest> findMostRecentBySampleNameForUser(String username);

}
