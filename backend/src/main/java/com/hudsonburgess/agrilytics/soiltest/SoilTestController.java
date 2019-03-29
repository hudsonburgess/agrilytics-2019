package com.hudsonburgess.agrilytics.soiltest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/soiltests")
public class SoilTestController {

    @Autowired private SoilTestRepository soilTestRepository;

    @RequestMapping(value = "")
    public List<SoilTest> getSoilTestsForSample(@RequestParam("sampleName") String sampleName, @RequestParam("username") String username) {
        return soilTestRepository.findByUsernameAndSampleName(username, sampleName);
    }

    @RequestMapping(value = "/mostRecent")
    public List<SoilTest> getMostRecentSoilTests(@RequestParam("username") String username) {
        return soilTestRepository.findMostRecentBySampleNameForUser(username);
    }

}
