package com.ssafy.peopool.model.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.peopool.model.Follow;

import com.ssafy.peopool.model.repo.FollowRepo;

@Service
public class FollowServiceImpl implements FollowService {

	@Autowired
	FollowRepo followRepo;

	@Override
	public boolean registerFollow(Follow follow) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.registerFollow(follow) == 1;
	}

	@Override
	public boolean deleteFollow(Follow follow) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.deleteFollow(follow) == 1;
	}

	@Override
	public int getFollowerCount(String index, String type) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.getFollowerCount(index, type);
	}

	@Override
	public int getFollowingCount(String index, String type) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.getFollowingCount(index, type);
	}

	@Override
	public List<Follow> getFollowing(String index, String type) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.getFollowing(index, type);
	}

	@Override
	public List<Follow> getFollower(String index, String type) throws SQLException {
		// TODO Auto-generated method stub
		return followRepo.getFollower(index, type);
	}

}
