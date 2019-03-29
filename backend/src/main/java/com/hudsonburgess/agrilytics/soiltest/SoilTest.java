package com.hudsonburgess.agrilytics.soiltest;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "soiltests")
@Data
@Builder
public class SoilTest {

    private String id;
    private String username;

    private String sampleName;
    @Field("testDate") private Date testDate;

    @Field("P") private int p;
    @Field("K") private int k;
    @Field("waterPh") private double waterPh;
    @Field("bufferPh") private double bufferPh;

}
