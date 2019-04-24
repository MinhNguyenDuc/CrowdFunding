'use strict';

var mongoose = require('mongoose');

var campaignSchema = mongoose.Schema({
  title: String,
  contractAddress: String,
  description: String
});

module.exports = mongoose.model('CampaignModel', campaignSchema);
// var campaign = mongoose.model('CampaignModel', campaignSchema);
//var newCampagin = new campaignSchema();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY2FtcGFpZ25TY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImNvbnRyYWN0QWRkcmVzcyIsImRlc2NyaXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVdDLE9BQVgsWUFBSjs7QUFFQSxJQUFJQyxpQkFBaUJGLFNBQVNHLE1BQVQsQ0FBZ0I7QUFDbkNDLFNBQU9DLE1BRDRCO0FBRW5DQyxtQkFBaUJELE1BRmtCO0FBR25DRSxlQUFhRjtBQUhzQixDQUFoQixDQUFyQjs7QUFNQUcsT0FBT0MsT0FBUCxHQUFpQlQsU0FBU1UsS0FBVCxDQUFlLGVBQWYsRUFBZ0NSLGNBQWhDLENBQWpCO0FBQ0E7QUFDQSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxudmFyIGNhbXBhaWduU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IFN0cmluZyxcbiAgY29udHJhY3RBZGRyZXNzOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmdcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdDYW1wYWlnbk1vZGVsJywgY2FtcGFpZ25TY2hlbWEpO1xuLy8gdmFyIGNhbXBhaWduID0gbW9uZ29vc2UubW9kZWwoJ0NhbXBhaWduTW9kZWwnLCBjYW1wYWlnblNjaGVtYSk7XG4vL3ZhciBuZXdDYW1wYWdpbiA9IG5ldyBjYW1wYWlnblNjaGVtYSgpOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY2FtcGFpZ25TY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImNvbnRyYWN0QWRkcmVzcyIsImRlc2NyaXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVdDLE9BQVgsWUFBSjs7QUFFQSxJQUFJQyxpQkFBaUJGLFNBQVNHLE1BQVQsQ0FBZ0I7QUFDbkNDLFNBQU9DLE1BRDRCO0FBRW5DQyxtQkFBaUJELE1BRmtCO0FBR25DRSxlQUFhRjtBQUhzQixDQUFoQixDQUFyQjs7QUFNQUcsT0FBT0MsT0FBUCxHQUFpQlQsU0FBU1UsS0FBVCxDQUFlLGVBQWYsRUFBZ0NSLGNBQWhDLENBQWpCO0FBQ0E7QUFDQSIsImZpbGUiOiJ1bmtub3duIn0=