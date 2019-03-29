package com.hudsonburgess.agrilytics.nitratetest;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "nitrate_tests")
@Data
public class NitrateTest {

    private String id;
    private String username;

    private String sampleName;
    private Date testDate;

    private double nitrate;

}
