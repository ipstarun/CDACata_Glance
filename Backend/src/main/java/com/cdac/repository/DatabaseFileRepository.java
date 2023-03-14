package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.DatabaseFile;

public interface DatabaseFileRepository extends JpaRepository<DatabaseFile, String> {

}
