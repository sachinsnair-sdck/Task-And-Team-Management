package com.task.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Entity
@Table(name = "tasks")
@Data
public class Task {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY )
    private Integer id;

    private String title;
    private String status;

    @Column(name="user_id")
    private Integer userId;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;
}