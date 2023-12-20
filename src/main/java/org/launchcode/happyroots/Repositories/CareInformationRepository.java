package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.CareInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareInformationRepository extends JpaRepository<CareInformation, Integer> {


    public CareInformation findByWateringDesc (String wateringDesc);
    public CareInformation findBySunlightDesc(String sunlightDesc);
    public CareInformation findByPruningDesc(String pruningDesc);


}
