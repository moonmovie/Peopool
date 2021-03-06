package com.ssafy.peopool.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.peopool.model.Interview;
import com.ssafy.peopool.model.repo.InterviewRepo;

@Service
public class InterviewServiceImpl implements InterviewService{

	@Autowired
	InterviewRepo interviewRepo;
	
	
	@Override
	public boolean registerURL(String url) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.registerURL(url) == 1;
	}

	@Override
	public List<Interview> getInterviews(int index) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.getInterviews(index);
	}

	@Override
	public List<Interview> getLastInterviews(int index) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.getLastInterviews(index);
	}

	@Override
	public boolean finishInterview(Interview interview) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.finishInterview(interview) == 1;
	}

	@Override
	public boolean isInterview(Interview interview) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.isInterview(interview) == 1;
	}

	@Override
	public boolean registerInterview(Interview interview) throws SQLException {
		// TODO Auto-generated method stub
		return interviewRepo.registerInterview(interview) == 1;
	}

}
