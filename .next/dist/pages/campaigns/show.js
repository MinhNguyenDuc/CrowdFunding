'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/minhnguyenduc/Private/Work/Blockchain/CrowdFunding/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          title = _props.title,
          description = _props.description;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: title,
        description: description,
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, dbResult;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                _context.next = 6;
                return _axios2.default.get("http://localhost:4000/campaigns/" + props.query.address);

              case 6:
                dbResult = _context.sent;

                console.log(dbResult.data[0].title);

                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  title: dbResult.data[0].title,
                  description: dbResult.data[0].description
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsImFkZHJlc3MiLCJyb3V0ZSIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsInN1bW1hcnkiLCJkYlJlc3VsdCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInNlbnQiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJfeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQVJBLElBQUlBLGVBQWUsd0ZBQW5COzs7QUFVQSxJQUFJQyxlQUFlLFVBQVVDLFVBQVYsRUFBc0I7QUFDdkMsMEJBQVVELFlBQVYsRUFBd0JDLFVBQXhCOztBQUVBLFdBQVNELFlBQVQs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LG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU80QixTQUFTYSxJQUFULEVBQVA7QUE5Qko7QUFnQ0Q7QUFDRixTQW5DTSxFQW1DSm5CLE9BbkNJLEVBbUNLLElBbkNMLENBQVA7QUFvQ0QsT0F0QzBDLENBQWhDLENBQVg7O0FBd0NBLGVBQVNvQixlQUFULENBQXlCQyxFQUF6QixFQUE2QjtBQUMzQixlQUFPdkIsS0FBS2pDLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3NELGVBQVA7QUFDRCxLQTlDTTtBQUZKLEdBQUQsQ0F6Sko7O0FBNE1BLFNBQU8xRCxZQUFQO0FBQ0QsQ0F0TmtCLGtCQUFuQjs7a0JBd05lQSxZIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnL2hvbWUvbWluaG5ndXllbmR1Yy9Qcml2YXRlL1dvcmsvQmxvY2tjaGFpbi9Dcm93ZEZ1bmRpbmcvcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG52YXIgQ2FtcGFpZ25TaG93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbXBhaWduU2hvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2FtcGFpZ25TaG93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1wYWlnblNob3cpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDYW1wYWlnblNob3cuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25TaG93KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FtcGFpZ25TaG93LCBbe1xuICAgIGtleTogJ3JlbmRlckNhcmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWxhbmNlID0gX3Byb3BzLmJhbGFuY2UsXG4gICAgICAgICAgbWFuYWdlciA9IF9wcm9wcy5tYW5hZ2VyLFxuICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24gPSBfcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgICByZXF1ZXN0c0NvdW50ID0gX3Byb3BzLnJlcXVlc3RzQ291bnQsXG4gICAgICAgICAgYXBwcm92ZXJzQ291bnQgPSBfcHJvcHMuYXBwcm92ZXJzQ291bnQsXG4gICAgICAgICAgdGl0bGUgPSBfcHJvcHMudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBfcHJvcHMuZGVzY3JpcHRpb247XG5cblxuICAgICAgdmFyIGl0ZW1zID0gW3tcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfSwge1xuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgIG1ldGE6ICdNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlcidcbiAgICAgIH0sIHtcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIFJlcXVlc3RzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzJ1xuICAgICAgfSwge1xuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbidcbiAgICAgIH0sIHtcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXG4gICAgICAgIG1ldGE6ICdDYW1wYWlnbiBCYWxhbmNlIChldGhlciknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuJ1xuICAgICAgfV07XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuR3JvdXAsIHsgaXRlbXM6IGl0ZW1zLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogODJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExheW91dCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogODdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NhbXBhaWduIFNob3cnXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgR3JpZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4OVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICB7IHdpZHRoOiAxMCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA5MVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgIHsgd2lkdGg6IDYsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJpYnV0ZUZvcm0sIHsgYWRkcmVzczogdGhpcy5wcm9wcy5hZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDk0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogOThcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA5OVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zLycgKyB0aGlzLnByb3BzLmFkZHJlc3MgKyAnL3JlcXVlc3RzJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdWaWV3IFJlcXVlc3RzJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm9wcykge1xuICAgICAgICB2YXIgY2FtcGFpZ24sIHN1bW1hcnksIGRiUmVzdWx0O1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc3VtbWFyeSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jYW1wYWlnbnMvXCIgKyBwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZGJSZXN1bHQgPSBfY29udGV4dC5zZW50O1xuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYlJlc3VsdC5kYXRhWzBdLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHtcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgICAgICAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgICAgICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXG4gICAgICAgICAgICAgICAgICB0aXRsZTogZGJSZXN1bHQuZGF0YVswXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYlJlc3VsdC5kYXRhWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gQ2FtcGFpZ25TaG93O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsImFkZHJlc3MiLCJyb3V0ZSIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsInN1bW1hcnkiLCJkYlJlc3VsdCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInNlbnQiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJfeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQVJBLElBQUlBLGVBQWUsd0ZBQW5COzs7QUFVQSxJQUFJQyxlQUFlLFVBQVVDLFVBQVYsRUFBc0I7QUFDdkMsMEJBQVVELFlBQVYsRUFBd0JDLFVBQXhCOztBQUVBLFdBQVNELFlBQVQs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