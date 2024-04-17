package com.ssafy.today.domain.member.repository;

import com.ssafy.today.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}