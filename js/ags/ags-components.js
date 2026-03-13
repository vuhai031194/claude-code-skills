/**
 * AGS Components — Reusable render functions
 */
(function () {
  'use strict';

  var C = {};

  // ---- Helpers ----
  C.getLayerById = function (id) {
    return AGS_DATA.layers.find(function (l) { return l.id === id; });
  };

  C.getDeptById = function (layerId, deptId) {
    var layer = C.getLayerById(layerId);
    if (!layer) return null;
    return layer.departments.find(function (d) { return d.id === deptId; });
  };

  C.getRoleById = function (layerId, deptId, roleId) {
    var dept = C.getDeptById(layerId, deptId);
    if (!dept) return null;
    return dept.roles.find(function (r) { return r.id === roleId; });
  };

  C.findRoleGlobally = function (roleId) {
    for (var li = 0; li < AGS_DATA.layers.length; li++) {
      var layer = AGS_DATA.layers[li];
      for (var di = 0; di < layer.departments.length; di++) {
        var dept = layer.departments[di];
        for (var ri = 0; ri < dept.roles.length; ri++) {
          if (dept.roles[ri].id === roleId) {
            return { layer: layer, dept: dept, role: dept.roles[ri] };
          }
        }
      }
    }
    return null;
  };

  C.countDepts = function (layer) {
    return layer.departments.length;
  };

  C.countRoles = function (layer) {
    var n = 0;
    layer.departments.forEach(function (d) { n += d.roles.length; });
    return n;
  };

  C.countAllRoles = function () {
    var n = 0;
    AGS_DATA.layers.forEach(function (l) { n += C.countRoles(l); });
    return n;
  };

  C.countAllDepts = function () {
    var n = 0;
    AGS_DATA.layers.forEach(function (l) { n += l.departments.length; });
    return n;
  };

  C.countByType = function (type) {
    var n = 0;
    AGS_DATA.layers.forEach(function (l) {
      l.departments.forEach(function (d) {
        d.roles.forEach(function (r) {
          if (r.type === type) n++;
        });
      });
    });
    return n;
  };

  C.getAllRolesByMaturity = function (maturity) {
    var roles = [];
    AGS_DATA.layers.forEach(function (l) {
      l.departments.forEach(function (d) {
        d.roles.forEach(function (r) {
          if (r.maturity === maturity) {
            roles.push({ role: r, layer: l, dept: d });
          }
        });
      });
    });
    return roles;
  };

  // ---- Breadcrumb ----
  C.renderBreadcrumb = function (items) {
    return '<nav class="ags-breadcrumb" aria-label="AGS breadcrumb">' +
      items.map(function (item, i) {
        if (i < items.length - 1) {
          return '<a href="' + item.href + '">' + item.label + '</a><span class="ags-breadcrumb-sep">/</span>';
        }
        return '<span class="ags-breadcrumb-current">' + item.label + '</span>';
      }).join('') +
    '</nav>';
  };

  // ---- Header ----
  C.renderHeader = function () {
    return '<div class="ags-header">' +
      '<span class="ags-header-label">AGS v' + AGS_DATA.company.version + '</span>' +
      '<h1>' + AGS_DATA.company.name + '</h1>' +
      '<p>' + AGS_DATA.company.tagline + '</p>' +
    '</div>';
  };

  // ---- View Tabs ----
  C.renderViewTabs = function (activeView) {
    var explore = [
      { id: 'overview', label: 'Overview', href: '#/ags' }
    ];
    var analyze = [
      { id: 'workflow', label: 'Workflow', href: '#/ags/workflow' },
      { id: 'dependencies', label: 'Dependencies', href: '#/ags/dependencies' },
      { id: 'human-ai', label: 'Human-AI', href: '#/ags/human-ai' },
      { id: 'roadmap', label: 'Roadmap', href: '#/ags/roadmap' },
      { id: 'maturity', label: 'Maturity', href: '#/ags/maturity' },
      { id: 'deployment', label: 'Deployment', href: '#/ags/deployment' }
    ];

    function renderGroup(label, tabs) {
      return '<div class="ags-tab-group"><span class="ags-tab-group-label">' + label + '</span>' +
        tabs.map(function (t) {
          var cls = t.id === activeView ? 'ags-tab active' : 'ags-tab';
          return '<a class="' + cls + '" href="' + t.href + '">' + t.label + '</a>';
        }).join('') +
      '</div>';
    }

    return '<div class="ags-tabs">' +
      renderGroup('Explore', explore) +
      renderGroup('Analyze', analyze) +
    '</div>';
  };

  // ---- Layer Card ----
  C.renderLayerCard = function (layer) {
    var deptCount = C.countDepts(layer);
    var roleCount = C.countRoles(layer);

    return '<a class="ags-layer-card" href="#/ags/layer/' + layer.id + '">' +
      '<div class="ags-layer-band" style="background:' + layer.color + '"></div>' +
      '<div class="ags-layer-card-body">' +
        '<div class="ags-layer-number">' + layer.number + '</div>' +
        '<div class="ags-layer-icon">' + layer.icon + '</div>' +
        '<div class="ags-layer-info">' +
          '<div class="ags-layer-name">' + layer.name + '</div>' +
          '<div class="ags-layer-purpose">' + layer.purpose + '</div>' +
        '</div>' +
        '<div class="ags-layer-stats">' +
          '<div class="ags-layer-stat"><div class="ags-layer-stat-value">' + deptCount + '</div><div class="ags-layer-stat-label">Depts</div></div>' +
          '<div class="ags-layer-stat"><div class="ags-layer-stat-value">' + roleCount + '</div><div class="ags-layer-stat-label">Roles</div></div>' +
        '</div>' +
      '</div>' +
      '<div class="ags-layer-arrow">\u203A</div>' +
    '</a>';
  };

  // ---- Mini Map ----
  C.renderMiniMap = function (activeLayerId) {
    return '<div class="ags-minimap">' +
      AGS_DATA.layers.map(function (l) {
        var cls = l.id === activeLayerId ? 'ags-minimap-item active' : 'ags-minimap-item';
        return '<a class="' + cls + '" href="#/ags/layer/' + l.id + '" style="background:' + l.colorLight + ';color:' + l.colorLight + '" title="' + l.name + '"></a>';
      }).join('') +
    '</div>';
  };

  // ---- Department Card ----
  C.renderDeptCard = function (layerId, dept) {
    var roleCount = dept.roles.length;
    var aiCount = dept.roles.filter(function (r) { return r.type === 'ai'; }).length;
    var humanCount = roleCount - aiCount;

    return '<a class="ags-dept-card" href="#/ags/layer/' + layerId + '/dept/' + dept.id + '">' +
      '<div class="ags-dept-card-name">' + dept.name + '</div>' +
      '<div class="ags-dept-card-desc">' + dept.description + '</div>' +
      '<div class="ags-dept-card-footer">' +
        '<span class="ags-count-badge">' + roleCount + ' role' + (roleCount !== 1 ? 's' : '') + '</span>' +
        (aiCount > 0 ? '<span class="ags-count-badge">' + aiCount + ' AI</span>' : '') +
        (humanCount > 0 ? '<span class="ags-count-badge">' + humanCount + ' Human</span>' : '') +
      '</div>' +
    '</a>';
  };

  // ---- Role Card ----
  C.renderRoleCard = function (layerId, deptId, role) {
    return '<a class="ags-role-card" href="#/ags/layer/' + layerId + '/dept/' + deptId + '/role/' + role.id + '">' +
      '<div class="ags-role-card-header">' +
        '<div class="ags-role-card-name">' + role.name + '</div>' +
        '<span class="ags-type-badge ' + role.type + '">' + role.type + '</span>' +
        '<span class="ags-maturity-badge ' + role.maturity + '">' + role.maturity + '</span>' +
      '</div>' +
      '<ul class="ags-role-responsibilities">' +
        role.responsibilities.slice(0, 4).map(function (r) {
          return '<li>' + r + '</li>';
        }).join('') +
        (role.responsibilities.length > 4 ? '<li>+' + (role.responsibilities.length - 4) + ' more...</li>' : '') +
      '</ul>' +
    '</a>';
  };

  // ---- Type Badge ----
  C.renderTypeBadge = function (type) {
    return '<span class="ags-type-badge ' + type + '">' + type + '</span>';
  };

  // ---- Maturity Badge ----
  C.renderMaturityBadge = function (maturity) {
    return '<span class="ags-maturity-badge ' + maturity + '">' + maturity + '</span>';
  };

  // ---- Summary Stats ----
  C.renderSummaryStats = function () {
    return '<div class="ags-summary-stats">' +
      '<div class="ags-summary-stat"><div class="ags-summary-stat-value">' + AGS_DATA.layers.length + '</div><div class="ags-summary-stat-label">Layers</div></div>' +
      '<div class="ags-summary-stat"><div class="ags-summary-stat-value">' + C.countAllDepts() + '</div><div class="ags-summary-stat-label">Departments</div></div>' +
      '<div class="ags-summary-stat"><div class="ags-summary-stat-value">' + C.countAllRoles() + '</div><div class="ags-summary-stat-label">Roles</div></div>' +
      '<div class="ags-summary-stat"><div class="ags-summary-stat-value">' + C.countByType('ai') + '</div><div class="ags-summary-stat-label">AI Agents</div></div>' +
      '<div class="ags-summary-stat"><div class="ags-summary-stat-value">' + C.countByType('human') + '</div><div class="ags-summary-stat-label">Human Roles</div></div>' +
    '</div>';
  };

  // ---- Stagger Animation ----
  C.animateCards = function (container, selector) {
    var cards = container.querySelectorAll(selector || '.ags-layer-card, .ags-dept-card, .ags-role-card');
    cards.forEach(function (card, i) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      requestAnimationFrame(function () {
        setTimeout(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 60 * i);
      });
    });
  };

  window.AGSComponents = C;
})();
