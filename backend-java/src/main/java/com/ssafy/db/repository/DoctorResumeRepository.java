package com.ssafy.db.repository;

import com.ssafy.db.entity.DoctorResume;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorResumeRepository extends JpaRepository<DoctorResume, Long> {
}
