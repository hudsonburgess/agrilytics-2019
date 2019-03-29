package com.hudsonburgess.agrilytics.tissuetest;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "tissue_tests")
@Data
public class TissueTest {

    private String id;
    private String username;

    private String sampleName;
    private Date testDate;

    private String crop;
    private String growthStage;
    @Field("N") private double n;
    @Field("P") private double p;
    @Field("K") private double k;

}
