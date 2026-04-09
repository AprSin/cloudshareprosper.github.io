const { Notice } = require('../models');

// 获取所有通知公告
const getAllNotices = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, isHot, isNew } = req.query;
    
    const where = {};
    if (isHot) where.isHot = isHot === 'true';
    if (isNew) where.isNew = isNew === 'true';
    
    const offset = (page - 1) * pageSize;
    
    const { count, rows } = await Notice.findAndCountAll({
      where,
      limit: parseInt(pageSize),
      offset: parseInt(offset),
      order: [['date', 'DESC']]
    });
    
    res.status(200).json({
      total: count,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      notices: rows
    });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 获取单个通知公告
const getNoticeById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).json({ message: '通知公告不存在' });
    }
    
    res.status(200).json({ notice });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 创建通知公告
const createNotice = async (req, res) => {
  try {
    const { noticeId, title, content, date, isHot, isNew } = req.body;
    
    // 检查noticeId是否已存在
    const existingNotice = await Notice.findOne({ where: { noticeId } });
    if (existingNotice) {
      return res.status(400).json({ message: '公告编号已存在' });
    }
    
    const notice = await Notice.create({
      noticeId,
      title,
      content,
      date,
      isHot,
      isNew
    });
    
    res.status(201).json({ message: '通知公告创建成功', notice });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 更新通知公告
const updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, date, isHot, isNew } = req.body;
    
    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).json({ message: '通知公告不存在' });
    }
    
    await notice.update({
      title,
      content,
      date,
      isHot,
      isNew
    });
    
    res.status(200).json({ message: '通知公告更新成功', notice });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 删除通知公告
const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    
    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).json({ message: '通知公告不存在' });
    }
    
    await notice.destroy();
    
    res.status(200).json({ message: '通知公告删除成功' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

module.exports = {
  getAllNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice
};