package com.ssafy.today.domain.elasticsearch.repository;

import com.ssafy.today.domain.elasticsearch.entity.DiaryEs;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;


public interface EsRepository extends ElasticsearchRepository<DiaryEs, String> {
    List<DiaryEs> findAllByMemberIdAndContentContaining(Long memberId, String keyword);
    DiaryEs findByMemberIdAndDiaryId(Long memberId, Long diaryId);
}