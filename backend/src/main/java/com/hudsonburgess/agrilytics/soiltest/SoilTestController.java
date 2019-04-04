package com.hudsonburgess.agrilytics.soiltest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/soiltests")
public class SoilTestController {

    @Autowired private SoilTestRepository soilTestRepository;

    @RequestMapping(value = "")
    public List<SoilTest> getSoilTestsForSample(@RequestParam("sampleName") String sampleName, @RequestHeader("Username") String username) {
        return soilTestRepository.findByUsernameAndSampleName(username, sampleName);
    }

    @RequestMapping(value = "/mostRecent")
    public List<SoilTest> getMostRecentSoilTests(@RequestHeader("Username") String username) {
        return soilTestRepository.findMostRecentBySampleNameForUser(username);
    }

}
