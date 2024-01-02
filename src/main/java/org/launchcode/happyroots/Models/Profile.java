package org.launchcode.happyroots.Models;


import jakarta.persistence.*;
import lombok.*;

import javax.annotation.Nullable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Profile extends AbstractEntity {


    private String name;
    private String userId;
    private String email;
    private String phoneNumber;
    private String imageUrl;


}
