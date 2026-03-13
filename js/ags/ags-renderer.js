/**
 * AGS Renderer — Route parser, shell, orchestrator
 */
(function () {
  'use strict';

  var R = {};

  // Parse route into structured object
  R.parseRoute = function (route) {
    // Remove /ags prefix
    var path = route.replace(/^\/ags\/?/, '');
    if (!path) return { view: 'overview' };

    // Analyze views
    var analyzeViews = ['workflow', 'dependencies', 'human-ai', 'roadmap', 'maturity', 'deployment'];
    if (analyzeViews.indexOf(path) !== -1) {
      return { view: path };
    }

    // Drill-down: layer/X/dept/Y/role/Z
    var parts = path.split('/');
    if (parts[0] === 'layer' && parts[1]) {
      var parsed = { view: 'layer', layerId: parts[1] };
      if (parts[2] === 'dept' && parts[3]) {
        parsed.view = 'department';
        parsed.deptId = parts[3];
        if (parts[4] === 'role' && parts[5]) {
          parsed.view = 'role';
          parsed.roleId = parts[5];
        }
      }
      return parsed;
    }

    return { view: 'overview' };
  };

  // Build breadcrumb based on parsed route
  R.buildBreadcrumb = function (parsed) {
    var C = window.AGSComponents;
    var items = [{ label: 'AGS', href: '#/ags' }];

    if (parsed.layerId) {
      var layer = C.getLayerById(parsed.layerId);
      if (layer) {
        if (parsed.view === 'layer') {
          items.push({ label: layer.icon + ' ' + layer.name });
        } else {
          items.push({ label: layer.icon + ' ' + layer.name, href: '#/ags/layer/' + parsed.layerId });
        }
      }
    }

    if (parsed.deptId && parsed.layerId) {
      var dept = C.getDeptById(parsed.layerId, parsed.deptId);
      if (dept) {
        if (parsed.view === 'department') {
          items.push({ label: dept.name });
        } else {
          items.push({ label: dept.name, href: '#/ags/layer/' + parsed.layerId + '/dept/' + parsed.deptId });
        }
      }
    }

    if (parsed.roleId && parsed.layerId && parsed.deptId) {
      var role = C.getRoleById(parsed.layerId, parsed.deptId, parsed.roleId);
      if (role) {
        items.push({ label: role.name });
      }
    }

    // Analyze view labels
    var analyzeLabels = {
      'workflow': 'Workflow',
      'dependencies': 'Dependencies',
      'human-ai': 'Human-AI',
      'roadmap': 'Roadmap',
      'maturity': 'Maturity',
      'deployment': 'Deployment'
    };
    if (analyzeLabels[parsed.view]) {
      items.push({ label: analyzeLabels[parsed.view] });
    }

    return C.renderBreadcrumb(items);
  };

  // Determine active tab ID from parsed route
  R.getActiveTab = function (parsed) {
    var analyzeViews = ['workflow', 'dependencies', 'human-ai', 'roadmap', 'maturity', 'deployment'];
    if (analyzeViews.indexOf(parsed.view) !== -1) return parsed.view;
    return 'overview';
  };

  // Main render
  R.render = function (container, route) {
    var C = window.AGSComponents;
    var V = window.AGSViews;
    var parsed = R.parseRoute(route);
    var activeTab = R.getActiveTab(parsed);

    var contentHtml = '';
    switch (parsed.view) {
      case 'overview':
        contentHtml = V.renderOverview();
        break;
      case 'layer':
        contentHtml = V.renderLayer(parsed.layerId);
        break;
      case 'department':
        contentHtml = V.renderDepartment(parsed.layerId, parsed.deptId);
        break;
      case 'role':
        contentHtml = V.renderRole(parsed.layerId, parsed.deptId, parsed.roleId);
        break;
      case 'workflow':
        contentHtml = V.renderWorkflow();
        break;
      case 'dependencies':
        contentHtml = V.renderDependencies();
        break;
      case 'human-ai':
        contentHtml = V.renderHumanAI();
        break;
      case 'roadmap':
        contentHtml = V.renderRoadmap();
        break;
      case 'maturity':
        contentHtml = V.renderMaturity();
        break;
      case 'deployment':
        contentHtml = V.renderDeployment();
        break;
      default:
        contentHtml = V.renderOverview();
    }

    // Only show header on overview
    var headerHtml = parsed.view === 'overview' ? C.renderHeader() : '';

    container.innerHTML =
      '<div class="ags-container">' +
        R.buildBreadcrumb(parsed) +
        headerHtml +
        C.renderViewTabs(activeTab) +
        '<div class="ags-content">' + contentHtml + '</div>' +
      '</div>';

    // Animate cards
    C.animateCards(container);
  };

  window.AGSRenderer = R;
})();
