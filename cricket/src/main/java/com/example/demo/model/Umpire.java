package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Document(collection = "coaches")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Umpire {
    @Id
    private String id;

    private String name;
    private Integer age;
    private String country;
    private String gender;
}
