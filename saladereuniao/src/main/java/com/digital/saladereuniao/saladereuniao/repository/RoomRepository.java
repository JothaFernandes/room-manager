package com.digital.saladereuniao.saladereuniao.repository;

import com.digital.saladereuniao.saladereuniao.model.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{

}