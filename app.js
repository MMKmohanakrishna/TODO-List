/* ==========================================================================
   Icon system — inline Lucide-style SVGs (no emoji anywhere in the UI)
   ========================================================================== */
var ICON_PATHS = {
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  'code-2': '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
  palette: '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
  film: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  house: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  'check-square': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>',
  'calendar-days': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  'chart-combined': '<path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  'file-plus': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'cloud-sun': '<path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'clipboard-check': '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 8 2a6 6 0 0 0 3.4-.8A1 1 0 0 1 21 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 17 16c-3 0-5-2-8-2a6 6 0 0 0-3.4.8"/>',
  'alarm-clock': '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>'
};
function svgIcon(name, opts){
  opts = opts || {};
  var body = ICON_PATHS[name] || '';
  var sw = opts.strokeWidth || 1.8;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+body+'</svg>';
}
function iconSpan(name, cls){
  return '<span class="icn'+(cls?' '+cls:'')+'" aria-hidden="true">'+svgIcon(name)+'</span>';
}

/* ==========================================================================
   Momentum OS — constants
   ========================================================================== */
var STORAGE_KEYS = {
  tasks: 'personal-todo-v2',
  stats: 'personal-stats-v2',
  habits: 'personal-habits-v1',
  goals: 'personal-goals-v1',
  achievements: 'personal-achievements-v1',
  focus: 'personal-focus-v1',
  settings: 'personal-settings-v1',
  notifications: 'personal-notifications-v1',
  mission: 'personal-daily-mission-v1',
  legacyTasks: 'daily-docket-cases-v1',
  legacyStats: 'daily-docket-stats-v1'
};

var DEFAULT_CATEGORIES = [
  {id:'personal', label:'Personal', icon:'smartphone', color:'#5B8DEF'},
  {id:'study', label:'Study', icon:'graduation-cap', color:'#4FA3E3'},
  {id:'development', label:'Development', icon:'code-2', color:'#9B7BE0'},
  {id:'design', label:'Design', icon:'palette', color:'#B36BD4'},
  {id:'video', label:'Video Editing', icon:'film', color:'#E36BA8'},
  {id:'fitness', label:'Fitness', icon:'activity', color:'#4CAF7D'},
  {id:'learning', label:'Learning', icon:'book-open', color:'#3FB6A8'},
  {id:'finance', label:'Finance', icon:'wallet', color:'#D6B24A'},
  {id:'home', label:'Home', icon:'house', color:'#C99A5B'},
  {id:'family', label:'Family', icon:'users', color:'#E08A3C'},
  {id:'projects', label:'Projects', icon:'rocket', color:'#7B8FE0'},
  {id:'important', label:'Important', icon:'flame', color:'#DB5A5A'}
];
var DEFAULT_CATEGORY_COLOR = '#9B7BE0';

var PRIORITY_META = {
  LOW: {label:'Low', xp:10, cls:'low'},
  MEDIUM: {label:'Medium', xp:20, cls:'medium'},
  HIGH: {label:'High', xp:40, cls:'high'},
  URGENT: {label:'Urgent', xp:60, cls:'urgent'}
};

var XP_VALUES = { DAILY_MISSION: 75, FOCUS_SESSION: 25, GOAL_MILESTONE: 100 };

var LEVELS = [
  {level:1, name:'Getting Started', min:0},
  {level:2, name:'Building Momentum', min:150},
  {level:3, name:'Consistent', min:400},
  {level:4, name:'Focused', min:800},
  {level:5, name:'Highly Productive', min:1500},
  {level:6, name:'Productivity Master', min:2600}
];

var ACHIEVEMENT_DEFS = [
  {id:'first-step', name:'First Step', desc:'Complete your first task.', icon:'trophy', xp:20, target:1},
  {id:'streak-7', name:'7-Day Streak', desc:'Complete tasks for 7 consecutive days.', icon:'flame', xp:50, target:7},
  {id:'early-bird', name:'Early Bird', desc:'Complete a task before 9 AM.', icon:'zap', xp:20, target:1},
  {id:'zero-overdue', name:'Zero Overdue', desc:'Clear all overdue tasks.', icon:'check-circle', xp:30, target:1},
  {id:'task-master', name:'Task Master', desc:'Complete 100 tasks.', icon:'award', xp:100, target:100},
  {id:'learning-machine', name:'Learning Machine', desc:'Complete 25 Study or Learning tasks.', icon:'book-open', xp:60, target:25},
  {id:'consistency', name:'Consistency', desc:'Complete daily missions 10 times.', icon:'repeat', xp:80, target:10}
];

var MISSION_TEMPLATES = ['fiveTasks','twoHighPriority','threeCategory','clearOverdue','oneFocusSession'];

var QUOTES = [
 "Small steps today, big results tomorrow.",
 "Discipline is choosing what you want most over what you want now.",
 "Progress, not perfection.",
 "Done is better than perfect.",
 "The secret of getting ahead is getting started.",
 "Consistency beats intensity.",
 "Focus on being productive instead of busy.",
 "You don't have to be great to start, but you have to start to be great.",
 "One task at a time.",
 "Momentum is built one small win at a time."
];

var FOCUS_PRESETS = [{label:'25 / 5', focus:25},{label:'50 / 10',focus:50},{label:'90 / 15',focus:90}];

var CALENDAR_QUOTES = [
 "Discipline today creates freedom tomorrow.",
 "Plan the day, don't let the day plan you.",
 "Small steps, repeated daily, build big outcomes.",
 "A calm plan beats a rushed sprint.",
 "Today is a fresh page — write something good on it.",
 "Consistency is the quiet force behind progress.",
 "One clear priority beats ten scattered ones."
];

/* ==========================================================================
   Storage helpers
   ========================================================================== */
function safeGet(key, fallback){
  try{ var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
}
function safeSet(key, value){
  try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ return false; }
}

/* ==========================================================================
   Date / id helpers
   ========================================================================== */
function pad2(n){ return String(n).padStart(2,'0'); }
function dayKey(d){ return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate()); }
function todayKey(){ return dayKey(new Date()); }
function yesterdayKeyOf(base){ var d = new Date(base); d.setDate(d.getDate()-1); return dayKey(d); }
function addDaysKey(key, n){ var d = new Date(key+'T00:00:00'); d.setDate(d.getDate()+n); return dayKey(d); }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function hashStr(s){ var h=0; for (var i=0;i<s.length;i++){ h = (h<<5)-h+s.charCodeAt(i); h|=0; } return h; }
function escapeHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; });
}
function truncate(s,n){ s=String(s||''); return s.length>n? s.slice(0,n)+'…' : s; }

/* ==========================================================================
   Default stats / migration
   ========================================================================== */
function defaultStats(){
  return { xp: 0, totalCompleted: 0, streak: 0, longestStreak: 0, lastActiveDay: null, missionsCompleted: 0 };
}

function runMigration(){
  var already = localStorage.getItem(STORAGE_KEYS.tasks);
  if (already !== null) return;

  var legacyTasksRaw, legacyStatsRaw;
  try{ legacyTasksRaw = localStorage.getItem(STORAGE_KEYS.legacyTasks); }catch(e){}
  try{ legacyStatsRaw = localStorage.getItem(STORAGE_KEYS.legacyStats); }catch(e){}
  var legacyTasks = legacyTasksRaw ? JSON.parse(legacyTasksRaw) : null;
  var legacyStats = legacyStatsRaw ? JSON.parse(legacyStatsRaw) : null;

  if (!legacyTasks){
    safeSet(STORAGE_KEYS.tasks, []);
    return;
  }

  var priorityMap = { low: 'LOW', standard: 'MEDIUM', critical: 'URGENT' };
  var migrated = legacyTasks.map(function(c){
    var priority = priorityMap[c.priority] || 'MEDIUM';
    return {
      id: c.id || uid(),
      title: c.text || 'Untitled task',
      description: '',
      category: 'personal',
      priority: priority,
      status: c.done ? 'COMPLETED' : 'TODO',
      dueDate: c.due || null,
      dueTime: null,
      createdAt: c.created || Date.now(),
      updatedAt: c.created || Date.now(),
      completedAt: c.done ? (c.created || Date.now()) : null,
      estimatedDuration: null,
      actualDuration: null,
      tags: [],
      subtasks: [],
      notes: '',
      recurring: null,
      goalId: null,
      xpReward: PRIORITY_META[priority].xp,
      xpAwarded: !!c.done
    };
  });
  safeSet(STORAGE_KEYS.tasks, migrated);

  var baseStats = defaultStats();
  if (legacyStats){
    baseStats.streak = legacyStats.streak || 0;
    baseStats.longestStreak = legacyStats.streak || 0;
    baseStats.lastActiveDay = legacyStats.lastActiveDay || null;
    baseStats.totalCompleted = legacyStats.totalClosed || 0;
    baseStats.xp = (legacyStats.totalClosed || 0) * 20;
  }
  safeSet(STORAGE_KEYS.stats, baseStats);
}

/* ==========================================================================
   Application state
   ========================================================================== */
var App = {
  tasks: [],
  habits: [],
  goals: [],
  achievements: [],
  focusSessions: [],
  notifications: [],
  stats: defaultStats(),
  settings: { theme: 'system', customCategories: [], notificationsEnabled: true },
  mission: null,
  route: 'day',
  ui: {
    search: '',
    filter: 'all',
    category: 'all',
    sort: 'smart',
    editingTaskId: null,
    calendarMonth: null,
    calendarSelectedDay: null,
    calendarViewMode: 'month',
    calendarCategoryFilter: null,
    calendarShowCompleted: true,
    goalsView: 'active',
    focusPrefillTaskId: null,
    notifiedDueSoon: {},
    notifiedOverdue: {},
    focusTimer: { running: false, remaining: 0, total: 0, taskId: null, intervalId: null }
  }
};

function loadAll(){
  runMigration();
  App.tasks = safeGet(STORAGE_KEYS.tasks, []);
  App.stats = Object.assign(defaultStats(), safeGet(STORAGE_KEYS.stats, {}));
  App.habits = safeGet(STORAGE_KEYS.habits, []);
  App.goals = safeGet(STORAGE_KEYS.goals, []);
  App.focusSessions = safeGet(STORAGE_KEYS.focus, []);
  App.notifications = safeGet(STORAGE_KEYS.notifications, []);
  App.settings = Object.assign({theme:'system', customCategories:[], notificationsEnabled:true}, safeGet(STORAGE_KEYS.settings, {}));
  App.mission = safeGet(STORAGE_KEYS.mission, null);

  var savedAchv = safeGet(STORAGE_KEYS.achievements, null);
  App.achievements = ACHIEVEMENT_DEFS.map(function(def){
    var saved = savedAchv && savedAchv.find(function(a){ return a.id === def.id; });
    return { id: def.id, unlocked: saved ? saved.unlocked : false, unlockedAt: saved ? saved.unlockedAt : null, progress: saved ? saved.progress : 0 };
  });

  if (App.stats.streak > 0 && App.stats.lastActiveDay !== todayKey() && App.stats.lastActiveDay !== yesterdayKeyOf(new Date())){
    App.stats.streak = 0;
    persistStats();
  }

  ensureTodayMission();
}

function persistTasks(){ safeSet(STORAGE_KEYS.tasks, App.tasks); }
function persistStats(){ safeSet(STORAGE_KEYS.stats, App.stats); }
function persistHabits(){ safeSet(STORAGE_KEYS.habits, App.habits); }
function persistGoals(){ safeSet(STORAGE_KEYS.goals, App.goals); }
function persistFocus(){ safeSet(STORAGE_KEYS.focus, App.focusSessions); }
function persistNotifications(){ safeSet(STORAGE_KEYS.notifications, App.notifications.slice(0,60)); }
function persistSettings(){ safeSet(STORAGE_KEYS.settings, App.settings); }
function persistMission(){ safeSet(STORAGE_KEYS.mission, App.mission); }
function persistAchievements(){ safeSet(STORAGE_KEYS.achievements, App.achievements); }

/* ==========================================================================
   Categories
   ========================================================================== */
function allCategories(){ return DEFAULT_CATEGORIES.concat(App.settings.customCategories || []); }
function categoryMeta(id){
  var found = allCategories().find(function(c){ return c.id === id; });
  return found || DEFAULT_CATEGORIES[0];
}
function categoryColor(id){
  var meta = categoryMeta(id);
  return meta.color || DEFAULT_CATEGORY_COLOR;
}
// Renders a category/habit "icon" field, which is either one of our built-in
// icon names (rendered as an SVG) or a user-typed custom emoji/character
// (custom categories and habits let people type their own — that's their
// content, not app chrome, so we leave it as-is rather than forcing an icon).
function glyphHtml(value, sizeCls, fallbackName){
  if (value && ICON_PATHS[value]) return iconSpan(value, sizeCls);
  if (value) return '<span class="icn '+sizeCls+'" aria-hidden="true">'+escapeHtml(value)+'</span>';
  return iconSpan(fallbackName, sizeCls);
}

/* ==========================================================================
   Due-date logic
   ========================================================================== */
function isOverdue(t){
  if (t.status === 'COMPLETED' || !t.dueDate) return false;
  var today = todayKey();
  if (t.dueDate < today) return true;
  if (t.dueDate === today && t.dueTime){
    var now = new Date();
    var parts = t.dueTime.split(':').map(Number);
    var due = new Date(); due.setHours(parts[0],parts[1],0,0);
    return now > due;
  }
  return false;
}
function dueUrgency(t){
  if (!t.dueDate) return null;
  if (t.status === 'COMPLETED') return 'done';
  if (isOverdue(t)) return 'overdue';
  var today = todayKey();
  if (t.dueDate === today) return 'today';
  if (t.dueDate === addDaysKey(today,1)) return 'soon';
  return 'later';
}
function dueLabel(t){
  var urgency = dueUrgency(t);
  if (!t.dueDate) return null;
  if (urgency === 'overdue'){
    var days = Math.max(1, Math.round((new Date(todayKey()) - new Date(t.dueDate)) / 86400000));
    return { cls:'overdue', text: days===1 ? 'Overdue · 1 day late' : ('Overdue · '+days+' days late') };
  }
  if (urgency === 'today'){
    if (t.dueTime){
      var now = new Date();
      var parts = t.dueTime.split(':').map(Number);
      var due = new Date(); due.setHours(parts[0],parts[1],0,0);
      var diffMs = due-now;
      if (diffMs > 0){
        var hh = Math.floor(diffMs/3600000), mm = Math.floor((diffMs%3600000)/60000);
        return { cls:'today', text: 'Due today · '+hh+'h '+mm+'m left' };
      }
    }
    return { cls:'today', text:'Due today' };
  }
  if (urgency === 'soon') return { cls:'soon', text:'Due tomorrow' };
  if (urgency === 'later'){
    var d = Math.round((new Date(t.dueDate) - new Date(todayKey()))/86400000);
    return { cls:'later', text:'Due in '+d+' days' };
  }
  return { cls:'later', text:'Due '+t.dueDate };
}

/* ==========================================================================
   XP / Level engine
   ========================================================================== */
function levelForXp(xp){
  var current = LEVELS[0];
  for (var i=0;i<LEVELS.length;i++){ if (xp >= LEVELS[i].min) current = LEVELS[i]; }
  return current;
}
function nextLevel(level){
  var idx = LEVELS.findIndex(function(l){ return l.level === level.level; });
  return LEVELS[idx+1] || null;
}
function awardXp(amount){
  var before = levelForXp(App.stats.xp);
  App.stats.xp += amount;
  persistStats();
  var after = levelForXp(App.stats.xp);
  if (after.level > before.level){
    showLevelUp(before, after, amount);
  }
}

/* ==========================================================================
   Streak engine
   ========================================================================== */
function bumpStreak(){
  var today = todayKey();
  if (App.stats.lastActiveDay === today) return;
  if (App.stats.lastActiveDay === yesterdayKeyOf(new Date())){
    App.stats.streak += 1;
  } else {
    App.stats.streak = 1;
  }
  App.stats.lastActiveDay = today;
  if (App.stats.streak > App.stats.longestStreak) App.stats.longestStreak = App.stats.streak;
  persistStats();
}

/* ==========================================================================
   Task CRUD
   ========================================================================== */
function findTask(id){ return App.tasks.find(function(t){ return t.id === id; }); }

function createTask(data){
  var priority = data.priority || 'MEDIUM';
  var task = {
    id: uid(),
    title: data.title.trim(),
    description: (data.description||'').trim(),
    category: data.category || 'personal',
    priority: priority,
    status: 'TODO',
    dueDate: data.dueDate || null,
    dueTime: data.dueTime || null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    completedAt: null,
    estimatedDuration: data.estimatedDuration ? Number(data.estimatedDuration) : null,
    actualDuration: null,
    tags: data.tags || [],
    subtasks: data.subtasks || [],
    notes: '',
    recurring: data.recurring || null,
    goalId: data.goalId || null,
    xpReward: PRIORITY_META[priority].xp,
    xpAwarded: false
  };
  App.tasks.unshift(task);
  persistTasks();
  pushNotification('file-plus', 'Task created: "'+task.title+'"');
  return task;
}

function updateTask(id, patch){
  var t = findTask(id);
  if (!t) return;
  Object.assign(t, patch, { updatedAt: Date.now() });
  if (patch.priority) t.xpReward = PRIORITY_META[t.priority].xp;
  persistTasks();
}

function completeTask(id){
  var t = findTask(id);
  if (!t || t.status === 'COMPLETED') return;
  var wasOverdue = isOverdue(t);
  t.status = 'COMPLETED';
  t.completedAt = Date.now();
  t.updatedAt = Date.now();
  if (!t.xpAwarded){
    t.xpAwarded = true;
    awardXp(t.xpReward);
  }
  App.stats.totalCompleted += 1;
  bumpStreak();
  persistTasks(); persistStats();
  checkAchievements();
  if (new Date(t.completedAt).getHours() < 9) unlockAchievement('early-bird');
  spawnRecurringIfNeeded(t);
  pushNotification('check', 'Completed: "'+t.title+'"');
  if (wasOverdue && !App.tasks.some(isOverdue)){
    unlockAchievement('zero-overdue');
  }
  return t;
}

function reopenTask(id){
  var t = findTask(id);
  if (!t) return;
  t.status = 'TODO';
  t.completedAt = null;
  t.updatedAt = Date.now();
  persistTasks();
}

function toggleTaskComplete(id){
  var t = findTask(id);
  if (!t) return null;
  if (t.status === 'COMPLETED') { reopenTask(id); return 'reopened'; }
  completeTask(id); return 'completed';
}

function deleteTask(id){
  var idx = App.tasks.findIndex(function(t){ return t.id === id; });
  if (idx === -1) return;
  var item = App.tasks[idx];
  App.tasks.splice(idx,1);
  persistTasks();
  showUndoToast('Task deleted: "'+truncate(item.title,40)+'"', function(){
    App.tasks.splice(idx,0,item);
    persistTasks();
    renderCurrentView();
  });
}

function duplicateTask(id){
  var t = findTask(id); if (!t) return;
  var clone = Object.assign({}, t, {
    id: uid(), createdAt: Date.now(), updatedAt: Date.now(), status:'TODO', completedAt:null, xpAwarded:false,
    subtasks: t.subtasks.map(function(s){ return {id:uid(), text:s.text, done:false}; })
  });
  App.tasks.unshift(clone);
  persistTasks();
}

function spawnRecurringIfNeeded(t){
  if (!t.recurring || !t.dueDate) return;
  var nextDue;
  if (t.recurring === 'daily') nextDue = addDaysKey(t.dueDate,1);
  else if (t.recurring === 'weekly') nextDue = addDaysKey(t.dueDate,7);
  else if (t.recurring === 'monthly'){
    var d = new Date(t.dueDate+'T00:00:00'); d.setMonth(d.getMonth()+1); nextDue = dayKey(d);
  }
  if (!nextDue) return;
  var clone = {
    id: uid(), title: t.title, description: t.description, category: t.category,
    priority: t.priority, status:'TODO', dueDate: nextDue, dueTime: t.dueTime,
    createdAt: Date.now(), updatedAt: Date.now(), completedAt: null,
    estimatedDuration: t.estimatedDuration, actualDuration: null,
    tags: t.tags.slice(), subtasks: t.subtasks.map(function(s){ return {id:uid(), text:s.text, done:false}; }),
    notes:'', recurring: t.recurring, goalId: t.goalId,
    xpReward: t.xpReward, xpAwarded:false
  };
  App.tasks.push(clone);
  persistTasks();
}

/* ==========================================================================
   Subtasks
   ========================================================================== */
function addSubtaskToTask(taskId, text){
  var t = findTask(taskId); if (!t || !text.trim()) return;
  t.subtasks.push({id:uid(), text:text.trim(), done:false});
  t.updatedAt = Date.now();
  persistTasks();
}
function toggleSubtask(taskId, subId){
  var t = findTask(taskId); if (!t) return;
  var s = t.subtasks.find(function(x){ return x.id===subId; }); if (!s) return;
  s.done = !s.done;
  t.updatedAt = Date.now();
  persistTasks();
}
function removeSubtask(taskId, subId){
  var t = findTask(taskId); if (!t) return;
  t.subtasks = t.subtasks.filter(function(x){ return x.id!==subId; });
  persistTasks();
}
function subtaskProgress(t){
  if (!t.subtasks || !t.subtasks.length) return null;
  var done = t.subtasks.filter(function(s){ return s.done; }).length;
  return { done: done, total: t.subtasks.length, pct: Math.round((done/t.subtasks.length)*100) };
}

/* ==========================================================================
   Filtering / sorting / search
   ========================================================================== */
function taskMatchesFilter(t, filter){
  var today = todayKey();
  if (filter === 'today') return t.dueDate === today && t.status !== 'COMPLETED';
  if (filter === 'upcoming') return t.dueDate && t.dueDate > today && t.status !== 'COMPLETED';
  if (filter === 'overdue') return isOverdue(t);
  if (filter === 'completed') return t.status === 'COMPLETED';
  return true;
}
function taskMatchesSearch(t, q){
  if (!q) return true;
  q = q.toLowerCase();
  var hay = [t.title, t.description, t.notes, categoryMeta(t.category).label].concat(t.tags||[]).join(' ').toLowerCase();
  return hay.indexOf(q) !== -1;
}
function priorityRank(p){ var m = {URGENT:0,HIGH:1,MEDIUM:2,LOW:3}; return (p in m) ? m[p] : 4; }
function smartSort(a,b){
  var aOver = isOverdue(a), bOver = isOverdue(b);
  if (aOver !== bOver) return aOver ? -1 : 1;
  var aUrgent = a.priority==='URGENT', bUrgent = b.priority==='URGENT';
  if (aUrgent !== bUrgent) return aUrgent ? -1 : 1;
  var today = todayKey();
  var aToday = a.dueDate===today, bToday = b.dueDate===today;
  if (aToday !== bToday) return aToday ? -1 : 1;
  var aDone = a.status==='COMPLETED', bDone = b.status==='COMPLETED';
  if (aDone !== bDone) return aDone ? 1 : -1;
  return priorityRank(a.priority) - priorityRank(b.priority);
}
function sortTasks(list, sortKey){
  var arr = list.slice();
  if (sortKey === 'priority') arr.sort(function(a,b){ return priorityRank(a.priority)-priorityRank(b.priority); });
  else if (sortKey === 'due') arr.sort(function(a,b){ return (a.dueDate||'9999').localeCompare(b.dueDate||'9999'); });
  else if (sortKey === 'created') arr.sort(function(a,b){ return b.createdAt-a.createdAt; });
  else if (sortKey === 'updated') arr.sort(function(a,b){ return b.updatedAt-a.updatedAt; });
  else if (sortKey === 'category') arr.sort(function(a,b){ return categoryMeta(a.category).label.localeCompare(categoryMeta(b.category).label); });
  else if (sortKey === 'status') arr.sort(function(a,b){ return a.status.localeCompare(b.status); });
  else arr.sort(smartSort);
  return arr;
}
function getFilteredTasks(){
  return App.tasks
    .filter(function(t){ return App.ui.category === 'all' || t.category === App.ui.category; })
    .filter(function(t){ return taskMatchesFilter(t, App.ui.filter); })
    .filter(function(t){ return taskMatchesSearch(t, App.ui.search); });
}

/* ==========================================================================
   Achievements
   ========================================================================== */
function unlockAchievement(id){
  var a = App.achievements.find(function(x){ return x.id===id; });
  if (!a || a.unlocked) return;
  a.unlocked = true; a.unlockedAt = Date.now();
  var def = ACHIEVEMENT_DEFS.find(function(d){ return d.id===id; });
  persistAchievements();
  awardXp(def.xp);
  pushNotification('trophy', 'Achievement unlocked: '+def.name);
  showCelebrationToast(def.name+' unlocked · +'+def.xp+' XP', 'trophy');
}
function achievementProgressValue(def){
  if (def.id === 'first-step' || def.id === 'task-master') return App.stats.totalCompleted;
  if (def.id === 'streak-7') return App.stats.longestStreak;
  if (def.id === 'learning-machine') return App.tasks.filter(function(t){ return t.status==='COMPLETED' && (t.category==='study'||t.category==='learning'); }).length;
  if (def.id === 'consistency') return App.stats.missionsCompleted;
  return null;
}
function checkAchievements(){
  ACHIEVEMENT_DEFS.forEach(function(def){
    var a = App.achievements.find(function(x){ return x.id===def.id; });
    if (!a || a.unlocked) return;
    var val = achievementProgressValue(def);
    if (val === null) return;
    a.progress = val;
    if (val >= def.target) unlockAchievement(def.id);
  });
  persistAchievements();
}

/* ==========================================================================
   Daily mission
   ========================================================================== */
function generateMissionForToday(){
  var today = todayKey();
  var idx = Math.abs(hashStr(today)) % MISSION_TEMPLATES.length;
  var type = MISSION_TEMPLATES[idx];
  var overdueCount = App.tasks.filter(isOverdue).length;
  if (type === 'clearOverdue' && overdueCount === 0) type = 'fiveTasks';
  var target = 5, label = 'Complete 5 tasks';
  if (type==='fiveTasks'){ target=5; label='Complete 5 tasks'; }
  else if (type==='twoHighPriority'){ target=2; label='Complete 2 high-priority tasks'; }
  else if (type==='threeCategory'){ target=3; label='Complete 3 Study tasks'; }
  else if (type==='clearOverdue'){ target=Math.max(1,overdueCount); label='Clear all overdue tasks'; }
  else if (type==='oneFocusSession'){ target=1; label='Complete one Focus session'; }
  return { date: today, type: type, target: target, label: label, rewardXp: XP_VALUES.DAILY_MISSION, rewarded:false };
}
function ensureTodayMission(){
  var today = todayKey();
  if (!App.mission || App.mission.date !== today){
    App.mission = generateMissionForToday();
    persistMission();
  }
}
function missionProgress(){
  var m = App.mission; if (!m) return {done:0,target:1};
  var today = m.date;
  var completedToday = App.tasks.filter(function(t){ return t.status==='COMPLETED' && t.completedAt && dayKey(new Date(t.completedAt))===today; });
  if (m.type==='fiveTasks') return {done: Math.min(completedToday.length, m.target), target:m.target};
  if (m.type==='twoHighPriority') return {done: Math.min(completedToday.filter(function(t){return t.priority==='HIGH'||t.priority==='URGENT';}).length, m.target), target:m.target};
  if (m.type==='threeCategory') return {done: Math.min(completedToday.filter(function(t){return t.category==='study';}).length, m.target), target:m.target};
  if (m.type==='clearOverdue'){ var overdueNow = App.tasks.filter(isOverdue).length; return {done: Math.max(0, m.target-overdueNow), target:m.target}; }
  if (m.type==='oneFocusSession'){ var doneToday = App.focusSessions.filter(function(s){return s.date===today;}).length; return {done:Math.min(doneToday,m.target), target:m.target}; }
  return {done:0,target:m.target};
}
function checkMissionCompletion(){
  var m = App.mission; if (!m || m.rewarded) return;
  var p = missionProgress();
  if (p.done >= p.target){
    m.rewarded = true;
    persistMission();
    App.stats.missionsCompleted += 1;
    persistStats();
    awardXp(m.rewardXp);
    pushNotification('target','Daily mission complete! +'+m.rewardXp+' XP');
    showCelebrationToast('Mission complete · +'+m.rewardXp+' XP', 'target');
    checkAchievements();
  }
}

/* ==========================================================================
   Habits
   ========================================================================== */
function createHabit(name, icon){
  var h = { id:uid(), name:name.trim(), icon: icon||'', createdAt:Date.now(), doneDates:[], streak:0, longestStreak:0, lastDoneDay:null };
  App.habits.push(h); persistHabits(); return h;
}
function toggleHabitToday(id){
  var h = App.habits.find(function(x){return x.id===id;}); if(!h) return;
  var today = todayKey();
  var idx = h.doneDates.indexOf(today);
  if (idx===-1){
    h.doneDates.push(today);
    if (h.lastDoneDay === yesterdayKeyOf(new Date())) h.streak+=1; else h.streak=1;
    h.lastDoneDay = today;
    if (h.streak>h.longestStreak) h.longestStreak=h.streak;
  } else {
    h.doneDates.splice(idx,1);
    h.streak = Math.max(0,h.streak-1);
    h.lastDoneDay = h.doneDates.length? h.doneDates[h.doneDates.length-1] : null;
  }
  persistHabits();
}
function deleteHabit(id){ App.habits = App.habits.filter(function(h){return h.id!==id;}); persistHabits(); }
function updateHabit(id, patch){
  var h = App.habits.find(function(x){return x.id===id;}); if(!h) return;
  Object.assign(h, patch);
  persistHabits();
}

/* ==========================================================================
   Goals
   ========================================================================== */
function createGoal(data){
  var g = { id:uid(), title:data.title.trim(), targetDate:data.targetDate||null, createdAt:Date.now(), archived:false, milestoneAwarded:false };
  App.goals.push(g); persistGoals(); return g;
}
function goalTasks(goalId){ return App.tasks.filter(function(t){return t.goalId===goalId;}); }
function goalProgress(goalId){
  var tasks = goalTasks(goalId);
  if (!tasks.length) return {pct:0, done:0, total:0};
  var done = tasks.filter(function(t){return t.status==='COMPLETED';}).length;
  return {pct: Math.round((done/tasks.length)*100), done:done, total:tasks.length};
}
function checkGoalMilestones(){
  App.goals.forEach(function(g){
    if (g.milestoneAwarded || g.archived) return;
    var p = goalProgress(g.id);
    if (p.total>0 && p.pct>=100){
      g.milestoneAwarded = true;
      awardXp(XP_VALUES.GOAL_MILESTONE);
      pushNotification('flag','Goal complete: '+g.title);
      showCelebrationToast('Goal complete · +'+XP_VALUES.GOAL_MILESTONE+' XP', 'flag');
    }
  });
  persistGoals();
}
function archiveGoal(id){ var g=App.goals.find(function(x){return x.id===id;}); if(g){g.archived=true; persistGoals();} }
function unarchiveGoal(id){ var g=App.goals.find(function(x){return x.id===id;}); if(g){g.archived=false; persistGoals();} }
function deleteGoal(id){ App.goals = App.goals.filter(function(g){return g.id!==id;}); persistGoals(); }

/* ==========================================================================
   Focus timer
   ========================================================================== */
function startFocus(minutes, taskId){
  stopFocusInterval();
  var total = minutes*60;
  App.ui.focusTimer = { running:true, remaining: total, total: total, taskId: taskId||null, intervalId:null };
  App.ui.focusTimer.intervalId = setInterval(tickFocus, 1000);
  renderFocusView();
}
function tickFocus(){
  var f = App.ui.focusTimer;
  if (!f.running) return;
  f.remaining -= 1;
  if (f.remaining <= 0){
    finishFocusSession(true);
    return;
  }
  updateFocusRingOnly();
}
function pauseFocus(){
  App.ui.focusTimer.running = !App.ui.focusTimer.running;
  if (!App.ui.focusTimer.running) stopFocusInterval();
  else App.ui.focusTimer.intervalId = setInterval(tickFocus,1000);
  renderFocusView();
}
function stopFocusInterval(){ if (App.ui.focusTimer.intervalId) clearInterval(App.ui.focusTimer.intervalId); App.ui.focusTimer.intervalId=null; }
function finishFocusSession(natural){
  var f = App.ui.focusTimer;
  stopFocusInterval();
  var elapsedMin = natural ? Math.round(f.total/60) : Math.round((f.total-f.remaining)/60);
  if (elapsedMin > 0){
    App.focusSessions.push({ id:uid(), date: todayKey(), durationMin: elapsedMin, completedAt: Date.now(), taskId: f.taskId });
    persistFocus();
    awardXp(XP_VALUES.FOCUS_SESSION);
    pushNotification('timer','Focus session complete · +'+XP_VALUES.FOCUS_SESSION+' XP');
    if (natural) showCelebrationToast('Focus session complete · +'+XP_VALUES.FOCUS_SESSION+' XP', 'timer');
    checkMissionCompletion();
  }
  App.ui.focusTimer = { running:false, remaining:0, total:0, taskId:null, intervalId:null };
  renderFocusView();
}
function focusMinutesForRange(days){
  var cutoff = Date.now() - days*86400000;
  return App.focusSessions.filter(function(s){return s.completedAt>=cutoff;}).reduce(function(sum,s){return sum+s.durationMin;},0);
}
function focusMinutesToday(){
  var today = todayKey();
  return App.focusSessions.filter(function(s){return s.date===today;}).reduce(function(sum,s){return sum+s.durationMin;},0);
}
function formatMMSS(totalSeconds){
  var m=Math.floor(totalSeconds/60), s=totalSeconds%60;
  return pad2(m)+':'+pad2(s);
}
function formatHM(mins){
  var h=Math.floor(mins/60), m=mins%60;
  return h>0 ? h+'h '+m+'m' : m+'m';
}

/* ==========================================================================
   Notifications
   ========================================================================== */
function pushNotification(icon, text){
  App.notifications.unshift({id:uid(), icon:icon, text:text, time:Date.now(), read:false});
  App.notifications = App.notifications.slice(0,60);
  persistNotifications();
  updateNotifDot();
}
function unreadNotifCount(){ return App.notifications.filter(function(n){return !n.read;}).length; }
function markAllNotificationsRead(){ App.notifications.forEach(function(n){n.read=true;}); persistNotifications(); updateNotifDot(); }
function timeAgo(ts){
  var diff = Date.now()-ts;
  var mins = Math.floor(diff/60000);
  if (mins<1) return 'just now';
  if (mins<60) return mins+'m ago';
  var hrs = Math.floor(mins/60);
  if (hrs<24) return hrs+'h ago';
  return Math.floor(hrs/24)+'d ago';
}
function checkReminders(){
  if (App.settings.notificationsEnabled === false) return;
  var now = Date.now();
  App.tasks.forEach(function(t){
    if (t.status==='COMPLETED') return;
    if (isOverdue(t) && !App.ui.notifiedOverdue[t.id]){
      App.ui.notifiedOverdue[t.id] = true;
      pushNotification('alert-triangle','"'+t.title+'" is overdue');
    }
    if (t.dueDate===todayKey() && t.dueTime){
      var parts = t.dueTime.split(':').map(Number);
      var due = new Date(); due.setHours(parts[0],parts[1],0,0);
      var diff = due-now;
      if (diff>0 && diff<=3600000 && !App.ui.notifiedDueSoon[t.id]){
        App.ui.notifiedDueSoon[t.id] = true;
        pushNotification('alarm-clock','"'+t.title+'" is due within an hour');
      }
    }
  });
}

/* ==========================================================================
   Insights
   ========================================================================== */
function weeklyInsights(){
  var now = new Date();
  var startOfWeek = new Date(now); startOfWeek.setDate(now.getDate()-6); startOfWeek.setHours(0,0,0,0);
  var completedThisWeek = App.tasks.filter(function(t){ return t.status==='COMPLETED' && t.completedAt && t.completedAt>=startOfWeek.getTime(); });
  var createdThisWeek = App.tasks.filter(function(t){ return t.createdAt>=startOfWeek.getTime(); });
  var completionRate = createdThisWeek.length
    ? Math.round((createdThisWeek.filter(function(t){return t.status==='COMPLETED';}).length/createdThisWeek.length)*100)
    : (completedThisWeek.length?100:0);

  var dayCounts = {};
  completedThisWeek.forEach(function(t){ var wd=new Date(t.completedAt).toLocaleDateString(undefined,{weekday:'long'}); dayCounts[wd]=(dayCounts[wd]||0)+1; });
  var bestDay = '—', bestCount=0;
  Object.keys(dayCounts).forEach(function(k){ if(dayCounts[k]>bestCount){bestCount=dayCounts[k]; bestDay=k;} });

  var catCounts = {};
  completedThisWeek.forEach(function(t){ catCounts[t.category]=(catCounts[t.category]||0)+1; });
  var topCat=null, topCatCount=0;
  Object.keys(catCounts).forEach(function(k){ if(catCounts[k]>topCatCount){topCatCount=catCounts[k]; topCat=k;} });

  return {
    completed: completedThisWeek.length,
    completionRate: completionRate,
    focusMin: focusMinutesForRange(7),
    bestDay: bestDay,
    topCategory: topCat? categoryMeta(topCat).label : '—',
    overdue: App.tasks.filter(isOverdue).length,
    streak: App.stats.streak
  };
}
function productivityNotes(insights){
  var notes = [];
  if (insights.bestDay && insights.bestDay!=='—') notes.push("You're most productive on "+insights.bestDay+"s.");
  if (insights.topCategory && insights.topCategory!=='—') notes.push('Most of your completions this week were in '+insights.topCategory+'.');
  if (insights.overdue>0) notes.push('You have '+insights.overdue+' overdue task'+(insights.overdue===1?'':'s')+'.');
  else notes.push('Nothing overdue. Excellent.');
  if (App.stats.streak>0) notes.push("You're on a "+App.stats.streak+'-day streak.');
  return notes;
}

/* ==========================================================================
   Toasts / level-up / confirm dialog
   ========================================================================== */
function showToast(text, iconName){
  var stack = document.getElementById('toastStack');
  var el = document.createElement('div'); el.className='toast';
  el.innerHTML = (iconName? iconSpan(iconName,'icn-sm') : '') + '<span>'+escapeHtml(text)+'</span>';
  stack.appendChild(el);
  setTimeout(function(){ el.remove(); }, 3200);
}
function showCelebrationToast(text, iconName){
  var stack = document.getElementById('toastStack');
  var el = document.createElement('div'); el.className='toast celebrate';
  el.innerHTML = iconSpan(iconName||'star','icn-sm') + '<span>'+escapeHtml(text)+'</span>';
  stack.appendChild(el);
  setTimeout(function(){ el.remove(); }, 3200);
}
function showUndoToast(text, undoFn){
  var stack = document.getElementById('toastStack');
  var el = document.createElement('div'); el.className='toast';
  var iconWrap = document.createElement('span'); iconWrap.innerHTML = iconSpan('x','icn-sm');
  var span = document.createElement('span'); span.textContent = text;
  var btn = document.createElement('button'); btn.textContent='Undo';
  btn.addEventListener('click', function(){ undoFn(); el.remove(); });
  el.appendChild(iconWrap); el.appendChild(span); el.appendChild(btn);
  stack.appendChild(el);
  setTimeout(function(){ el.remove(); }, 6000);
}
function showLevelUp(before, after, xpGain){
  var overlay = document.getElementById('levelUpOverlay');
  overlay.innerHTML = '<div class="levelup-card">'+iconSpan('star','icn-xl')+'<div class="tag">LEVEL UP</div><div class="transition">'+
    escapeHtml(before.name)+' → '+escapeHtml(after.name)+'</div><div class="xp">+'+xpGain+' XP</div></div>';
  overlay.hidden=false;
  pushNotification('star','Leveled up to '+after.name+'!');
  setTimeout(function(){ overlay.hidden=true; }, 2600);
}
function confirmDialog(title, message, onConfirm){
  var overlay = document.getElementById('confirmOverlay');
  var box = document.getElementById('confirmBox');
  box.innerHTML = '<h3>'+escapeHtml(title)+'</h3><p style="color:var(--text-soft);font-size:0.88rem">'+escapeHtml(message)+'</p>'+
    '<div class="detail-actions" style="justify-content:flex-end"><button class="btn ghost" id="confirmCancel">Cancel</button><button class="btn danger" id="confirmOk">Confirm</button></div>';
  overlay.hidden=false;
  document.getElementById('confirmCancel').addEventListener('click', function(){ overlay.hidden=true; });
  document.getElementById('confirmOk').addEventListener('click', function(){ overlay.hidden=true; onConfirm(); });
}
function closeAllOverlays(){
  document.querySelectorAll('.overlay').forEach(function(o){o.hidden=true;});
  document.getElementById('levelUpOverlay').hidden=true;
  document.getElementById('notifPanel').hidden=true;
  document.querySelectorAll('.mini-menu').forEach(function(m){m.remove();});
  var moreBtn = document.getElementById('moreNavBtn');
  if (moreBtn) moreBtn.setAttribute('aria-expanded','false');
}

/* ==========================================================================
   Theme
   ========================================================================== */
function applyTheme(){
  var root=document.documentElement;
  if (App.settings.theme==='light') root.setAttribute('data-theme','light');
  else if (App.settings.theme==='dark') root.setAttribute('data-theme','dark');
  else root.removeAttribute('data-theme');
}

/* ==========================================================================
   Greeting helpers
   ========================================================================== */
function greetingWord(){
  var h = new Date().getHours();
  if (h<12) return 'Good morning';
  if (h<17) return 'Good afternoon';
  return 'Good evening';
}
function pickQuote(){
  var idx = Math.abs(hashStr(todayKey()+'q')) % QUOTES.length;
  return QUOTES[idx];
}

/* ==========================================================================
   Router + sidebar
   ========================================================================== */
var ROUTES = ['day','tasks','calendar','focus','habits','goals','achievements','insights','settings'];

function navigate(route){
  App.route = route;
  location.hash = route;
  closeAllOverlays();
  renderCurrentView();
}

function renderCurrentView(){
  updateSidebar();
  updateNotifDot();
  if (App.route==='day') renderDayView();
  else if (App.route==='tasks') renderTasksView();
  else if (App.route==='calendar') renderCalendarView();
  else if (App.route==='focus') renderFocusView();
  else if (App.route==='habits') renderHabitsView();
  else if (App.route==='goals') renderGoalsView();
  else if (App.route==='achievements') renderAchievementsView();
  else if (App.route==='insights') renderInsightsView();
  else if (App.route==='settings') renderSettingsView();
}

var MORE_SHEET_ROUTES = ['focus','habits','achievements','insights','settings'];
function updateSidebar(){
  document.querySelectorAll('.nav-item').forEach(function(b){ b.setAttribute('aria-current', b.dataset.route===App.route?'page':'false'); });
  document.querySelectorAll('.bn-item[data-route]').forEach(function(b){ b.setAttribute('aria-current', b.dataset.route===App.route?'page':'false'); });
  var moreBtn = document.getElementById('moreNavBtn');
  if (moreBtn) moreBtn.setAttribute('aria-current', MORE_SHEET_ROUTES.indexOf(App.route)!==-1 ? 'page' : 'false');
  document.querySelectorAll('.view').forEach(function(v){ v.hidden = v.id !== ('view-'+App.route); });

  var openCount = App.tasks.filter(function(t){return t.status!=='COMPLETED';}).length;
  document.getElementById('navTaskCount').textContent = openCount;

  var level = levelForXp(App.stats.xp);
  var next = nextLevel(level);
  document.getElementById('sbLevelName').textContent = 'Level '+level.level+' · '+level.name;
  if (next){
    var span = App.stats.xp - level.min, total = next.min-level.min;
    document.getElementById('sbXpText').textContent = span+' / '+total;
    document.getElementById('sbXpFill').style.width = Math.min(100,Math.round((span/total)*100))+'%';
  } else {
    document.getElementById('sbXpText').textContent = App.stats.xp+' XP · Max level';
    document.getElementById('sbXpFill').style.width = '100%';
  }
}

/* ==========================================================================
   Shared UI builders
   ========================================================================== */
function statCardHtml(iconName,num,label,cls){
  return '<div class="stat-card '+cls+'">'+iconSpan(iconName,'icn-md')+'<span class="num">'+num+'</span><span class="label">'+label+'</span></div>';
}
function emptyStateEl(iconName,title,sub){
  var d=document.createElement('div'); d.className='empty-state';
  d.innerHTML=iconSpan(iconName,'icn-xl glyph')+'<h3>'+escapeHtml(title)+'</h3><p>'+escapeHtml(sub)+'</p>';
  return d;
}

function buildTaskCardEl(t){
  var cat = categoryMeta(t.category);
  var due = dueLabel(t);
  var prog = subtaskProgress(t);
  var div = document.createElement('div');
  div.className = 'task-card'+(isOverdue(t)?' overdue':'')+(t.status==='COMPLETED'?' completed':'');
  div.innerHTML =
    '<button class="task-check" data-check="'+t.id+'" aria-label="'+(t.status==='COMPLETED'?'Reopen task':'Complete task')+'">'+svgIcon('check')+'</button>'+
    '<div class="task-main" data-open="'+t.id+'">'+
      '<div class="task-title-row"><span class="task-title">'+escapeHtml(t.title)+'</span><span class="priority-pill '+PRIORITY_META[t.priority].cls+'">'+PRIORITY_META[t.priority].label+'</span></div>'+
      (t.description? '<div class="task-desc">'+escapeHtml(truncate(t.description,90))+'</div>':'')+
      '<div class="task-meta">'+
        '<span class="meta-cat">'+glyphHtml(cat.icon,'icn-sm','flag')+' '+escapeHtml(cat.label)+'</span>'+
        (due? '<span class="due-pill '+due.cls+'">'+escapeHtml(due.text)+'</span>':'')+
        (t.tags&&t.tags.length? t.tags.map(function(tag){return '<span class="tag">#'+escapeHtml(tag)+'</span>';}).join(''):'')+
      '</div>'+
      (prog? '<div class="task-progress-row"><div class="progress-bar"><span style="width:'+prog.pct+'%"></span></div><span class="frac">'+prog.done+' / '+prog.total+'</span></div>':'')+
    '</div>'+
    '<div class="task-side">'+
      '<span class="xp-tag">+'+t.xpReward+' XP</span>'+
      '<button class="task-menu-btn" data-menu="'+t.id+'" aria-label="More actions">'+svgIcon('more-horizontal')+'</button>'+
    '</div>';

  div.querySelector('[data-check]').addEventListener('click', function(e){
    e.stopPropagation();
    var checkBtn = e.currentTarget;
    var result = toggleTaskComplete(t.id);
    if (result==='completed'){
      checkBtn.classList.add('pop');
      checkMissionCompletion();
      checkGoalMilestones();
      showCelebrationToast(truncate(t.title,30)+' · +'+t.xpReward+' XP'+(App.stats.streak>1?' · Streak continues':''), 'check');
    }
    renderCurrentView();
  });
  div.querySelector('[data-open]').addEventListener('click', function(){ openTaskDetails(t.id); });
  div.querySelector('[data-menu]').addEventListener('click', function(e){
    e.stopPropagation();
    openTaskMenu(t.id, e.currentTarget);
  });
  return div;
}

function openTaskMenu(taskId, anchorEl){
  document.querySelectorAll('.mini-menu').forEach(function(m){m.remove();});
  var t = findTask(taskId);
  var menu = document.createElement('div');
  menu.className='mini-menu';
  menu.style.cssText='position:absolute;background:var(--bg-raised);border:1px solid var(--border);border-radius:8px;box-shadow:var(--shadow-md);padding:0.3rem;z-index:40;display:flex;flex-direction:column;min-width:150px;';
  var rect = anchorEl.getBoundingClientRect();
  menu.style.top = (rect.bottom+window.scrollY+4)+'px';
  menu.style.left = (rect.left+window.scrollX-110)+'px';
  var items = [
    {label:'Open details', fn:function(){openTaskDetails(t.id);}},
    {label:'Edit', fn:function(){openTaskForm(t.id);}},
    {label:'Duplicate', fn:function(){duplicateTask(t.id); renderCurrentView(); showToast('Task duplicated.');}},
    {label:'Delete', fn:function(){confirmDialog('Delete task?','Remove "'+t.title+'"? You can undo right after.',function(){deleteTask(t.id); renderCurrentView();});}}
  ];
  items.forEach(function(it){
    var b=document.createElement('button');
    b.type='button';
    b.textContent=it.label;
    b.style.cssText='background:none;border:none;text-align:left;padding:0.4rem 0.6rem;border-radius:6px;font-size:0.82rem;color:var(--text);cursor:pointer;';
    b.addEventListener('mouseenter',function(){b.style.background='var(--surface-2)';});
    b.addEventListener('mouseleave',function(){b.style.background='none';});
    b.addEventListener('click', function(){ it.fn(); menu.remove(); });
    menu.appendChild(b);
  });
  document.body.appendChild(menu);
  setTimeout(function(){
    document.addEventListener('click', function closeMenu(e){ if(!menu.contains(e.target)){ menu.remove(); document.removeEventListener('click',closeMenu);} });
  },0);
}

/* ==========================================================================
   Task composer (drawer)
   ========================================================================== */
var formSubtasksDraft = [];

function populateCategorySelect(selectEl){
  selectEl.innerHTML = allCategories().map(function(c){ return '<option value="'+c.id+'">'+escapeHtml(c.label)+'</option>'; }).join('');
}
function populateGoalSelect(){
  var sel = document.getElementById('taskGoalSelect');
  sel.innerHTML = '<option value="">No goal</option>' + App.goals.filter(function(g){return !g.archived;}).map(function(g){return '<option value="'+g.id+'">'+escapeHtml(g.title)+'</option>';}).join('');
}
function renderSubtasksBuilder(){
  var el = document.getElementById('taskSubtasksBuilder');
  el.innerHTML = formSubtasksDraft.map(function(s,i){
    return '<div class="subtask-row"><span style="flex:1">'+escapeHtml(s.text)+'</span><button type="button" class="subtask-remove" data-idx="'+i+'" aria-label="Remove subtask">'+svgIcon('x')+'</button></div>';
  }).join('') || '<p style="font-size:0.78rem;color:var(--text-mute)">No subtasks yet.</p>';
  el.querySelectorAll('.subtask-remove').forEach(function(btn){
    btn.addEventListener('click', function(){ formSubtasksDraft.splice(Number(btn.dataset.idx),1); renderSubtasksBuilder(); });
  });
}
function openTaskForm(taskId, prefillDate){
  App.ui.editingTaskId = taskId || null;
  var overlay = document.getElementById('taskFormOverlay');
  var heading = document.getElementById('taskFormHeading');
  var submitBtn = document.getElementById('taskFormSubmit');
  populateCategorySelect(document.getElementById('taskCategorySelect'));
  populateGoalSelect();
  document.getElementById('taskFormError').classList.remove('visible');

  if (taskId){
    var t = findTask(taskId);
    heading.textContent = 'Edit Task';
    submitBtn.textContent = 'Save Changes';
    document.getElementById('taskFormId').value = t.id;
    document.getElementById('taskTitleInput').value = t.title;
    document.getElementById('taskDescInput').value = t.description||'';
    document.getElementById('taskCategorySelect').value = t.category;
    document.getElementById('taskPrioritySelect').value = t.priority;
    document.getElementById('taskDueDate').value = t.dueDate||'';
    document.getElementById('taskDueTime').value = t.dueTime||'';
    document.getElementById('taskEstDuration').value = t.estimatedDuration||'';
    document.getElementById('taskRecurringSelect').value = t.recurring||'';
    document.getElementById('taskGoalSelect').value = t.goalId||'';
    document.getElementById('taskTagsInput').value = (t.tags||[]).join(', ');
    formSubtasksDraft = (t.subtasks||[]).map(function(s){return {id:s.id, text:s.text, done:s.done};});
  } else {
    heading.textContent = 'New Task';
    submitBtn.textContent = '+ Add Task';
    document.getElementById('taskForm').reset();
    document.getElementById('taskFormId').value='';
    document.getElementById('taskCategorySelect').value='personal';
    document.getElementById('taskPrioritySelect').value='MEDIUM';
    document.getElementById('taskDueDate').value = prefillDate||'';
    formSubtasksDraft = [];
  }
  renderSubtasksBuilder();
  overlay.hidden=false;
  setTimeout(function(){ document.getElementById('taskTitleInput').focus(); },0);
}
function closeTaskForm(){ document.getElementById('taskFormOverlay').hidden=true; App.ui.editingTaskId=null; }

/* ==========================================================================
   Task details (drawer)
   ========================================================================== */
function statusSelectHtml(t){
  var opts = ['TODO','IN_PROGRESS','COMPLETED'].map(function(s){
    var label = s==='TODO'?'To Do':s==='IN_PROGRESS'?'In Progress':'Completed';
    return '<option value="'+s+'"'+(t.status===s?' selected':'')+'>'+label+'</option>';
  }).join('');
  return '<select id="detailsStatusSelect" style="font-size:0.8rem;padding:0.25rem 0.5rem">'+opts+'</select>';
}
function renderDetailsSubtasks(t){
  var el = document.getElementById('detailsSubtasks'); if(!el) return;
  el.innerHTML = (t.subtasks||[]).map(function(s){
    return '<div class="subtask-row '+(s.done?'done':'')+'"><button type="button" class="subtask-check" data-sub="'+s.id+'" aria-label="Toggle subtask">'+svgIcon('check')+'</button><span style="flex:1">'+escapeHtml(s.text)+'</span><button type="button" class="subtask-remove" data-subremove="'+s.id+'" aria-label="Remove subtask">'+svgIcon('x')+'</button></div>';
  }).join('');
  el.querySelectorAll('[data-sub]').forEach(function(b){ b.addEventListener('click', function(){ toggleSubtask(t.id,b.dataset.sub); refreshDetailsForTask(t.id); renderCurrentView(); }); });
  el.querySelectorAll('[data-subremove]').forEach(function(b){ b.addEventListener('click', function(){ removeSubtask(t.id,b.dataset.subremove); refreshDetailsForTask(t.id); renderCurrentView(); }); });
}
function refreshDetailsForTask(taskId){ openTaskDetails(taskId); }
function closeTaskDetails(){ document.getElementById('taskDetailsOverlay').hidden=true; }

function openTaskDetails(taskId){
  var t = findTask(taskId); if(!t) return;
  var overlay = document.getElementById('taskDetailsOverlay');
  var drawer = document.getElementById('taskDetailsDrawer');
  var cat = categoryMeta(t.category);
  var prog = subtaskProgress(t);
  var due = dueLabel(t);
  var goal = t.goalId ? App.goals.find(function(g){return g.id===t.goalId;}) : null;

  drawer.innerHTML =
    '<div class="drawer-header"><h2>'+escapeHtml(t.title)+'</h2><button class="drawer-close" id="detailsClose" aria-label="Close">'+svgIcon('x')+'</button></div>'+
    (t.description? '<p style="color:var(--text-soft);font-size:0.88rem">'+escapeHtml(t.description)+'</p>':'')+
    '<div>'+
      '<div class="detail-row"><span class="k">Category</span><span class="meta-cat">'+glyphHtml(cat.icon,'icn-sm','flag')+' '+escapeHtml(cat.label)+'</span></div>'+
      '<div class="detail-row"><span class="k">Status</span><span>'+statusSelectHtml(t)+'</span></div>'+
      '<div class="detail-row"><span class="k">Priority</span><span class="priority-pill '+PRIORITY_META[t.priority].cls+'">'+PRIORITY_META[t.priority].label+'</span></div>'+
      (due? '<div class="detail-row"><span class="k">Due</span><span class="due-pill '+due.cls+'">'+escapeHtml(due.text)+'</span></div>':'')+
      (t.estimatedDuration? '<div class="detail-row"><span class="k">Estimated</span><span>'+t.estimatedDuration+' min</span></div>':'')+
      (goal? '<div class="detail-row"><span class="k">Goal</span><span>'+escapeHtml(goal.title)+'</span></div>':'')+
    '</div>'+
    (t.tags&&t.tags.length? '<div class="task-meta">'+t.tags.map(function(tag){return '<span class="tag">#'+escapeHtml(tag)+'</span>';}).join(' ')+'</div>':'')+
    '<div><label>Subtasks</label><div id="detailsSubtasks"></div>'+
      (prog? '<div class="task-progress-row"><div class="progress-bar"><span style="width:'+prog.pct+'%"></span></div><span class="frac">'+prog.done+' / '+prog.total+'</span></div>':'')+
      '<div style="display:flex;gap:0.4rem;margin-top:0.5rem"><input type="text" id="detailsNewSubtask" placeholder="Add a subtask" style="flex:1"><button type="button" class="btn ghost" id="detailsAddSubtask">Add</button></div>'+
    '</div>'+
    '<div><label for="detailsNotes">Notes</label><textarea id="detailsNotes" rows="3" placeholder="Add notes...">'+escapeHtml(t.notes||'')+'</textarea></div>'+
    '<div class="detail-actions">'+
      '<button class="btn primary" id="detailsComplete">'+(t.status==='COMPLETED'?'Reopen':'Complete')+'</button>'+
      '<button class="btn ghost" id="detailsEdit">Edit</button>'+
      '<button class="btn ghost" id="detailsFocus">Start Focus</button>'+
      '<button class="btn ghost" id="detailsDuplicate">Duplicate</button>'+
      '<button class="btn danger" id="detailsDelete">Delete</button>'+
    '</div>';

  renderDetailsSubtasks(t);
  overlay.hidden=false;

  document.getElementById('detailsClose').addEventListener('click', closeTaskDetails);
  document.getElementById('detailsComplete').addEventListener('click', function(){
    toggleTaskComplete(t.id); checkMissionCompletion(); checkGoalMilestones(); closeTaskDetails(); renderCurrentView();
  });
  document.getElementById('detailsEdit').addEventListener('click', function(){ closeTaskDetails(); openTaskForm(t.id); });
  document.getElementById('detailsFocus').addEventListener('click', function(){ App.ui.focusPrefillTaskId = t.id; closeTaskDetails(); navigate('focus'); });
  document.getElementById('detailsDuplicate').addEventListener('click', function(){ duplicateTask(t.id); closeTaskDetails(); renderCurrentView(); showToast('Task duplicated.'); });
  document.getElementById('detailsDelete').addEventListener('click', function(){
    closeTaskDetails();
    confirmDialog('Delete task?', 'This will remove "'+t.title+'". You can undo right after.', function(){ deleteTask(t.id); renderCurrentView(); });
  });
  document.getElementById('detailsAddSubtask').addEventListener('click', function(){
    var inp = document.getElementById('detailsNewSubtask');
    if (inp.value.trim()){ addSubtaskToTask(t.id, inp.value); inp.value=''; refreshDetailsForTask(t.id); renderCurrentView(); }
  });
  var statusSel = document.getElementById('detailsStatusSelect');
  if (statusSel) statusSel.addEventListener('change', function(){ updateTask(t.id,{status:statusSel.value}); renderCurrentView(); });
  document.getElementById('detailsNotes').addEventListener('blur', function(e){ updateTask(t.id,{notes:e.target.value}); });
}

/* ==========================================================================
   My Day view
   ========================================================================== */
function renderDayView(){
  var view = document.getElementById('view-day');
  var today = todayKey();
  var completedToday = App.tasks.filter(function(t){return t.status==='COMPLETED'&&t.completedAt&&dayKey(new Date(t.completedAt))===today;}).length;
  var remainingToday = App.tasks.filter(function(t){return t.status!=='COMPLETED' && t.dueDate===today;}).length;
  var overdueCount = App.tasks.filter(isOverdue).length;
  var m = App.mission, mp = missionProgress();
  var priorityTasks = sortTasks(App.tasks.filter(function(t){return t.status!=='COMPLETED';}), 'smart').slice(0,5);
  var missionDone = mp.done >= mp.target;

  view.innerHTML =
   '<div class="greeting-card"><h1>'+greetingWord()+', Mohana</h1>'+
    '<p class="greeting-sub">Small steps today, big results tomorrow.</p>'+
    '<p class="greeting-quote">"'+pickQuote()+'"</p></div>'+
   '<div class="stat-grid">'+
     statCardHtml('check', completedToday, 'Completed', 'good')+
     statCardHtml('clock', remainingToday, 'Due Today', '')+
     statCardHtml('alert-triangle', overdueCount, 'Overdue', overdueCount>0?'warn':'')+
     statCardHtml('flame', App.stats.streak, 'Day Streak', 'streak')+
   '</div>'+
   '<div class="mission-card'+(missionDone?' complete':'')+'">'+
     '<span class="mission-label">'+(missionDone?"Today's Mission — Complete":"Today's Mission")+'</span>'+
     '<span class="mission-title">'+(m?escapeHtml(m.label):'Complete tasks')+'</span>'+
     '<div class="mission-progress-row"><div class="progress-bar"><span style="width:'+Math.min(100,Math.round((mp.done/mp.target)*100))+'%"></span></div><span class="frac">'+mp.done+' / '+mp.target+'</span></div>'+
     '<span class="mission-reward">'+(missionDone? '+'+m.rewardXp+' XP earned' : 'Reward: +'+(m?m.rewardXp:75)+' XP')+'</span>'+
   '</div>'+
   '<div class="section-heading"><h2>Priority Tasks</h2><button class="link-btn" id="dayViewAllBtn">View all →</button></div>'+
   '<div class="task-list" id="dayTaskList"></div>';

  var list = document.getElementById('dayTaskList');
  if (!priorityTasks.length){
    list.appendChild(emptyStateEl('cloud-sun',"You're all caught up.",'No pending tasks require your attention.'));
  } else {
    priorityTasks.forEach(function(t){ list.appendChild(buildTaskCardEl(t)); });
  }
  document.getElementById('dayViewAllBtn').addEventListener('click', function(){ navigate('tasks'); });
}

/* ==========================================================================
   Tasks view
   ========================================================================== */
function renderTasksView(){
  var view = document.getElementById('view-tasks');
  view.innerHTML =
    '<div class="section-heading"><h2>Tasks</h2><button class="btn primary" id="tasksAddBtn">+ Add Task</button></div>'+
    '<div class="filter-row" id="filterChips"></div>'+
    '<div class="category-scroll" id="categoryChips"></div>'+
    '<div class="filter-row tools-row"><label class="sr-only" for="sortSelect">Sort</label><select id="sortSelect" class="filter-select"></select><button class="btn ghost" id="clearCompletedBtn">Clear Completed</button></div>'+
    '<div class="task-list" id="tasksList"></div>';

  var filters = [['all','All'],['today','Today'],['upcoming','Upcoming'],['overdue','Overdue'],['completed','Completed']];
  var chipRow = document.getElementById('filterChips');
  filters.forEach(function(f){
    var b=document.createElement('button'); b.type='button'; b.className='chip'; b.textContent=f[1];
    b.setAttribute('aria-pressed', App.ui.filter===f[0]);
    b.addEventListener('click', function(){ App.ui.filter=f[0]; renderTasksView(); });
    chipRow.appendChild(b);
  });

  var catRow = document.getElementById('categoryChips');
  var allBtn = document.createElement('button'); allBtn.type='button'; allBtn.className='category-chip'; allBtn.textContent='All categories';
  allBtn.setAttribute('aria-pressed', App.ui.category==='all');
  allBtn.addEventListener('click', function(){ App.ui.category='all'; renderTasksView(); });
  catRow.appendChild(allBtn);
  allCategories().forEach(function(c){
    var count = App.tasks.filter(function(t){return t.category===c.id;}).length;
    if (!count) return;
    var b=document.createElement('button'); b.type='button'; b.className='category-chip';
    b.innerHTML=glyphHtml(c.icon,'icn-sm','flag')+' '+escapeHtml(c.label)+' <span class="n">'+count+'</span>';
    b.setAttribute('aria-pressed', App.ui.category===c.id);
    b.addEventListener('click', function(){ App.ui.category=c.id; renderTasksView(); });
    catRow.appendChild(b);
  });

  var sortSelect = document.getElementById('sortSelect');
  var sortOptions = [['smart','Smart (recommended)'],['priority','Priority'],['due','Due Date'],['created','Created Date'],['updated','Updated Date'],['category','Category'],['status','Status']];
  sortSelect.innerHTML = sortOptions.map(function(o){return '<option value="'+o[0]+'"'+(App.ui.sort===o[0]?' selected':'')+'>'+o[1]+'</option>';}).join('');
  sortSelect.addEventListener('change', function(){ App.ui.sort=sortSelect.value; renderTasksView(); });

  document.getElementById('tasksAddBtn').addEventListener('click', function(){ openTaskForm(); });
  document.getElementById('clearCompletedBtn').addEventListener('click', function(){
    confirmDialog('Clear completed tasks?','This removes every completed task from your list.', function(){
      App.tasks = App.tasks.filter(function(t){return t.status!=='COMPLETED';});
      persistTasks(); renderCurrentView();
    });
  });

  var list = document.getElementById('tasksList');
  var filtered = sortTasks(getFilteredTasks(), App.ui.sort);
  if (!filtered.length){
    if (App.ui.search) list.appendChild(emptyStateEl('search','No tasks match your search.','Try a different keyword or clear your filters.'));
    else if (App.ui.filter==='completed') list.appendChild(emptyStateEl('clipboard-check','No completed tasks yet.','Finish a task and it will show up here.'));
    else if (App.ui.filter==='overdue') list.appendChild(emptyStateEl('target','Nothing overdue. Excellent.','You are fully caught up.'));
    else list.appendChild(emptyStateEl('cloud-sun',"You're all caught up.",'No pending tasks. Enjoy the breathing room.'));
  } else {
    filtered.forEach(function(t){ list.appendChild(buildTaskCardEl(t)); });
  }
}

/* ==========================================================================
   Calendar view
   ========================================================================== */
function ensureCalendarMonth(){
  if (!App.ui.calendarMonth){ var d=new Date(); App.ui.calendarMonth = d.getFullYear()+'-'+pad2(d.getMonth()+1); }
}
function ensureCalendarSelectedDay(){
  if (!App.ui.calendarSelectedDay) App.ui.calendarSelectedDay = todayKey();
}
function syncCalendarMonthToSelected(){
  var d = new Date(App.ui.calendarSelectedDay+'T00:00:00');
  App.ui.calendarMonth = d.getFullYear()+'-'+pad2(d.getMonth()+1);
}
function shiftCalendarByView(delta){
  if (App.ui.calendarViewMode==='month'){
    var parts=App.ui.calendarMonth.split('-').map(Number);
    var d=new Date(parts[0],parts[1]-1+delta,1);
    App.ui.calendarMonth = d.getFullYear()+'-'+pad2(d.getMonth()+1);
  } else if (App.ui.calendarViewMode==='week'){
    var d2=new Date((App.ui.calendarSelectedDay||todayKey())+'T00:00:00');
    d2.setDate(d2.getDate()+7*delta);
    App.ui.calendarSelectedDay = dayKey(d2);
    syncCalendarMonthToSelected();
  } else {
    var d3=new Date((App.ui.calendarSelectedDay||todayKey())+'T00:00:00');
    d3.setDate(d3.getDate()+delta);
    App.ui.calendarSelectedDay = dayKey(d3);
    syncCalendarMonthToSelected();
  }
  renderCalendarView();
}

function taskPassesCalendarFilters(t){
  if (App.ui.calendarCategoryFilter && t.category !== App.ui.calendarCategoryFilter) return false;
  if (!App.ui.calendarShowCompleted && t.status==='COMPLETED') return false;
  return true;
}
function tasksDueOn(dateKeyStr){
  return App.tasks.filter(function(t){ return t.dueDate===dateKeyStr && taskPassesCalendarFilters(t); });
}
function colorTint(hex){ return hex + '22'; }
function chipHtml(t){
  var color = categoryColor(t.category);
  var done = t.status==='COMPLETED';
  return '<span class="task-chip'+(done?' done':'')+'" style="background:'+colorTint(color)+'">'+
    '<span class="dot" style="background:'+color+'"></span>'+
    '<span class="txt">'+escapeHtml(t.title)+'</span>'+
  '</span>';
}
function formatTimeLabel(hhmm){
  var parts = hhmm.split(':').map(Number);
  var d=new Date(); d.setHours(parts[0],parts[1],0,0);
  return d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});
}
function pickDayQuote(key){
  var idx = Math.abs(hashStr(key+'dq')) % CALENDAR_QUOTES.length;
  return CALENDAR_QUOTES[idx];
}

function renderCalendarView(){
  ensureCalendarMonth();
  ensureCalendarSelectedDay();
  var view = document.getElementById('view-calendar');
  var parts = App.ui.calendarMonth.split('-').map(Number), y=parts[0], m=parts[1];
  var first = new Date(y,m-1,1);
  var monthLabel = first.toLocaleDateString(undefined,{month:'long',year:'numeric'});

  view.innerHTML =
    '<div class="section-heading"><h2>Calendar</h2></div>'+
    '<div class="cal-layout">'+
      '<div class="cal-main">'+
        '<div class="cal-toolbar">'+
          '<div class="cal-toolbar-left">'+
            '<button type="button" class="cal-nav-btn" id="calPrev" aria-label="Previous">'+svgIcon('chevron-left')+'</button>'+
            '<button type="button" class="cal-nav-btn" id="calNext" aria-label="Next">'+svgIcon('chevron-right')+'</button>'+
            '<button type="button" class="cal-today-btn" id="calToday">Today</button>'+
            '<span class="cal-divider"></span>'+
            '<h1 class="cal-month-title">'+monthLabel+'</h1>'+
          '</div>'+
          '<div class="cal-toolbar-right">'+
            '<div class="cal-view-switch" id="calViewSwitch">'+
              ['month','week','day'].map(function(v){return '<button type="button" data-view="'+v+'" aria-pressed="'+(App.ui.calendarViewMode===v)+'">'+v.charAt(0).toUpperCase()+v.slice(1)+'</button>';}).join('')+
            '</div>'+
            '<button type="button" class="btn primary" id="calAddTaskBtn">+ Add Task</button>'+
          '</div>'+
        '</div>'+
        '<div id="calBody"></div>'+
        '<div class="cal-filter-bar" id="calFilterBar"></div>'+
        '<div id="calOverviewSection"></div>'+
      '</div>'+
      '<aside class="day-panel" id="dayPanel" aria-label="Selected day"></aside>'+
    '</div>';

  document.getElementById('calPrev').addEventListener('click', function(){ shiftCalendarByView(-1); });
  document.getElementById('calNext').addEventListener('click', function(){ shiftCalendarByView(1); });
  document.getElementById('calToday').addEventListener('click', function(){
    var d=new Date();
    App.ui.calendarMonth = d.getFullYear()+'-'+pad2(d.getMonth()+1);
    App.ui.calendarSelectedDay = todayKey();
    renderCalendarView();
  });
  document.getElementById('calAddTaskBtn').addEventListener('click', function(){ openTaskForm(null, App.ui.calendarSelectedDay || todayKey()); });
  document.querySelectorAll('#calViewSwitch button').forEach(function(b){
    b.addEventListener('click', function(){ App.ui.calendarViewMode = b.dataset.view; renderCalendarView(); });
  });

  if (App.ui.calendarViewMode==='week') renderCalendarWeekBody();
  else if (App.ui.calendarViewMode==='day') renderCalendarDayBody();
  else renderCalendarMonthBody();

  renderCalendarFilterBar();
  renderMonthOverview();
  renderDayPanel();
}

function buildOverflowCell(dateObj){
  var cell=document.createElement('div');
  cell.className='cal-cell muted';
  cell.innerHTML='<span class="cal-daynum">'+dateObj.getDate()+'</span>';
  return cell;
}
function buildCalendarDayCell(key, dayNum){
  var isToday = key===todayKey();
  var isSelected = key===App.ui.calendarSelectedDay;
  var dayTasks = tasksDueOn(key);
  var cell = document.createElement('button');
  cell.type='button';
  cell.className='cal-cell'+(isToday?' today':'')+(isSelected?' selected':'');
  cell.setAttribute('aria-label', (isToday?'Today, ':'')+key+', '+dayTasks.length+' task'+(dayTasks.length===1?'':'s'));

  var visibleChips = dayTasks.slice(0,3);
  var overflow = dayTasks.length-visibleChips.length;

  cell.innerHTML = '<span class="cal-daynum">'+dayNum+'</span>'+
    '<div class="cal-chip-list">'+
      visibleChips.map(function(t){ return chipHtml(t); }).join('')+
      (overflow>0? '<button type="button" class="cal-more-btn" data-more="1">+'+overflow+' more</button>':'')+
    '</div>';

  cell.addEventListener('click', function(){
    App.ui.calendarSelectedDay = key;
    renderCalendarView();
  });
  return cell;
}
function renderCalendarMonthBody(){
  var body = document.getElementById('calBody');
  var parts = App.ui.calendarMonth.split('-').map(Number), y=parts[0], m=parts[1];
  var first = new Date(y,m-1,1);
  var startWeekday = first.getDay();
  var daysInMonth = new Date(y,m,0).getDate();

  var grid = document.createElement('div');
  grid.className='calendar-grid';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(function(d){ var el=document.createElement('div'); el.className='cal-dow'; el.textContent=d; grid.appendChild(el); });

  var prevMonthDays = new Date(y,m-1,0).getDate();
  for (var i=0;i<startWeekday;i++){
    var pdNum = prevMonthDays-startWeekday+1+i;
    grid.appendChild(buildOverflowCell(new Date(y,m-2,pdNum)));
  }
  for (var day=1; day<=daysInMonth; day++){
    var key = y+'-'+pad2(m)+'-'+pad2(day);
    grid.appendChild(buildCalendarDayCell(key, day));
  }
  var totalCells = startWeekday+daysInMonth;
  var trailing = (7 - (totalCells % 7)) % 7;
  for (var j=1;j<=trailing;j++){ grid.appendChild(buildOverflowCell(new Date(y,m,j))); }

  body.innerHTML=''; body.appendChild(grid);
}

function renderCalendarWeekBody(){
  var body = document.getElementById('calBody');
  var anchor = new Date((App.ui.calendarSelectedDay||todayKey())+'T00:00:00');
  var startOfWeek = new Date(anchor); startOfWeek.setDate(anchor.getDate()-anchor.getDay());
  var grid = document.createElement('div'); grid.className='cal-week-grid';
  for (var i=0;i<7;i++){
    var d = new Date(startOfWeek); d.setDate(startOfWeek.getDate()+i);
    var key = dayKey(d);
    var isToday = key===todayKey(), isSelected = key===App.ui.calendarSelectedDay;
    var dayTasks = tasksDueOn(key).sort(function(a,b){ return (a.dueTime||'99:99').localeCompare(b.dueTime||'99:99'); });
    var col=document.createElement('button');
    col.type='button';
    col.className='cal-week-col'+(isToday?' today':'')+(isSelected?' selected':'');
    col.innerHTML='<div class="cal-week-col-head"><span class="cal-week-dow">'+d.toLocaleDateString(undefined,{weekday:'short'})+'</span><span class="cal-week-daynum">'+d.getDate()+'</span></div>'+
      '<div class="cal-chip-list">'+dayTasks.map(function(t){return chipHtml(t);}).join('')+
      (dayTasks.length===0?'<span style="font-size:0.7rem;color:var(--text-mute)">No tasks</span>':'')+'</div>';
    col.addEventListener('click', function(k){ return function(){ App.ui.calendarSelectedDay=k; renderCalendarView(); }; }(key));
    grid.appendChild(col);
  }
  body.innerHTML=''; body.appendChild(grid);
}

function renderCalendarDayBody(){
  var body = document.getElementById('calBody');
  var key = App.ui.calendarSelectedDay || todayKey();
  var dayTasks = tasksDueOn(key).slice().sort(function(a,b){ return (a.dueTime||'99:99').localeCompare(b.dueTime||'99:99'); });
  var wrap = document.createElement('div'); wrap.className='cal-day-timeline';
  if (!dayTasks.length){
    wrap.appendChild(emptyStateEl('calendar-days','Nothing planned.','Add a task to fill this day.'));
  } else {
    dayTasks.forEach(function(t){
      var row=document.createElement('div'); row.className='cal-timeline-row';
      var timeSpan = document.createElement('span'); timeSpan.className='cal-timeline-time'; timeSpan.textContent = t.dueTime? formatTimeLabel(t.dueTime) : 'All day';
      var slot = document.createElement('div');
      slot.appendChild(buildTaskCardEl(t));
      row.appendChild(timeSpan); row.appendChild(slot);
      wrap.appendChild(row);
    });
  }
  body.innerHTML=''; body.appendChild(wrap);
}

function renderCalendarFilterBar(){
  var bar = document.getElementById('calFilterBar');
  var cats = allCategories().filter(function(c){ return App.tasks.some(function(t){return t.category===c.id;}); });
  bar.innerHTML = cats.map(function(c){
    var active = App.ui.calendarCategoryFilter===c.id;
    return '<button type="button" class="cal-filter-chip" data-catfilter="'+c.id+'" aria-pressed="'+active+'" style="color:'+c.color+'"><span class="dot" style="background:'+c.color+'"></span>'+escapeHtml(c.label)+'</button>';
  }).join('') +
  '<span class="cal-filter-sep"></span>'+
  '<label class="cal-completed-toggle"><input type="checkbox" id="calShowCompleted" '+(App.ui.calendarShowCompleted?'checked':'')+'> Show completed</label>';

  bar.querySelectorAll('[data-catfilter]').forEach(function(b){
    b.addEventListener('click', function(){
      var id=b.dataset.catfilter;
      App.ui.calendarCategoryFilter = App.ui.calendarCategoryFilter===id ? null : id;
      renderCalendarView();
    });
  });
  var showCompletedEl = document.getElementById('calShowCompleted');
  if (showCompletedEl){
    showCompletedEl.addEventListener('change', function(e){
      App.ui.calendarShowCompleted = e.target.checked;
      renderCalendarView();
    });
  }
}

function renderMonthOverview(){
  var section = document.getElementById('calOverviewSection');
  var parts = App.ui.calendarMonth.split('-').map(Number), y=parts[0], m=parts[1];
  var monthName = new Date(y,m-1,1).toLocaleDateString(undefined,{month:'long'});
  var monthTasks = App.tasks.filter(function(t){
    if (!t.dueDate) return false;
    var tp = t.dueDate.split('-').map(Number);
    return tp[0]===y && tp[1]===m;
  });
  var total = monthTasks.length;
  var completed = monthTasks.filter(function(t){return t.status==='COMPLETED';}).length;
  var overdue = monthTasks.filter(isOverdue).length;
  var rate = total? Math.round((completed/total)*100) : 0;

  section.innerHTML =
    '<div class="section-heading"><h2>'+monthName+' Overview</h2></div>'+
    '<div class="month-overview">'+
      '<div class="mo-ring" style="--pct:'+rate+'"><div class="mo-ring-inner">'+rate+'%</div></div>'+
      '<div class="mo-stats">'+
        '<div class="mo-stat"><div class="num">'+completed+'</div><div class="label">Tasks Completed</div></div>'+
        '<div class="mo-stat"><div class="num">'+total+'</div><div class="label">Total Tasks</div></div>'+
        '<div class="mo-stat"><div class="num">'+overdue+'</div><div class="label">Overdue Tasks</div></div>'+
        '<div class="mo-stat"><div class="num">'+rate+'%</div><div class="label">Completion Rate</div></div>'+
      '</div>'+
    '</div>';
}

function renderDayPanel(){
  var panel = document.getElementById('dayPanel');
  var key = App.ui.calendarSelectedDay || todayKey();
  var d = new Date(key+'T00:00:00');
  var label = d.toLocaleDateString(undefined,{weekday:'long', day:'numeric', month:'long', year:'numeric'});
  var quote = pickDayQuote(key);
  var dayTasks = tasksDueOn(key).sort(function(a,b){
    var at=a.dueTime||'99:99', bt=b.dueTime||'99:99';
    if (at!==bt) return at.localeCompare(bt);
    return priorityRank(a.priority)-priorityRank(b.priority);
  });

  panel.innerHTML =
    '<div><div class="day-panel-date">'+escapeHtml(label)+'</div>'+
    '<div class="day-panel-quote">"'+escapeHtml(quote)+'"</div></div>'+
    '<div class="day-panel-tasks-head"><h3>Tasks for this day</h3><button type="button" class="day-panel-add" id="dayPanelAdd" aria-label="Add task for this day" title="Add task for this day">+</button></div>'+
    '<div class="task-list" id="dayPanelList"></div>';

  document.getElementById('dayPanelAdd').addEventListener('click', function(){ openTaskForm(null, key); });
  var list = document.getElementById('dayPanelList');
  if (!dayTasks.length) list.appendChild(emptyStateEl('calendar-days','No tasks planned','Add a task to plan this day.'));
  else dayTasks.forEach(function(t){ list.appendChild(buildTaskCardEl(t)); });
}

/* ==========================================================================
   Focus view
   ========================================================================== */
function renderFocusView(){
  var view = document.getElementById('view-focus');
  var f = App.ui.focusTimer;
  var pct = f.total ? Math.round(((f.total-f.remaining)/f.total)*100) : 0;
  var mmss = formatMMSS(f.remaining);
  var linkedTask = f.taskId ? findTask(f.taskId) : (App.ui.focusPrefillTaskId ? findTask(App.ui.focusPrefillTaskId) : null);

  view.innerHTML =
    '<div class="section-heading"><h2>Focus</h2></div>'+
    '<div class="focus-wrap">'+
      '<div class="focus-presets" id="focusPresets"></div>'+
      '<div class="focus-ring" style="--pct:'+pct+'"><div class="focus-ring-inner"><span class="focus-time">'+mmss+'</span>'+
        (linkedTask? '<span class="focus-task-label">'+escapeHtml(linkedTask.title)+'</span>' : '<span class="focus-task-label">Free focus session</span>')+
      '</div></div>'+
      '<div class="focus-controls" id="focusControls"></div>'+
      '<div class="focus-stats-row">'+
        '<div class="focus-stat"><div class="num">'+formatHM(focusMinutesToday())+'</div><div class="label">Today\'s Focus</div></div>'+
        '<div class="focus-stat"><div class="num">'+formatHM(focusMinutesForRange(7))+'</div><div class="label">This Week</div></div>'+
      '</div>'+
    '</div>';

  var presetsEl = document.getElementById('focusPresets');
  if (!(f.running || f.total>0)){
    FOCUS_PRESETS.forEach(function(p){
      var b=document.createElement('button'); b.type='button'; b.className='btn ghost'; b.textContent=p.label;
      b.addEventListener('click', function(){ startFocus(p.focus, App.ui.focusPrefillTaskId); });
      presetsEl.appendChild(b);
    });
    var customBtn=document.createElement('button'); customBtn.type='button'; customBtn.className='btn ghost'; customBtn.textContent='Custom';
    customBtn.addEventListener('click', function(){
      var mins = prompt('Custom focus duration in minutes:', '30');
      var n = Number(mins);
      if (n>0) startFocus(n, App.ui.focusPrefillTaskId);
    });
    presetsEl.appendChild(customBtn);
  }

  var controls = document.getElementById('focusControls');
  if (f.total>0){
    var pauseBtn=document.createElement('button'); pauseBtn.type='button'; pauseBtn.className='btn ghost'; pauseBtn.textContent=f.running?'Pause':'Resume';
    pauseBtn.addEventListener('click', pauseFocus);
    var finishBtn=document.createElement('button'); finishBtn.type='button'; finishBtn.className='btn primary'; finishBtn.textContent='Finish';
    finishBtn.addEventListener('click', function(){ finishFocusSession(false); });
    controls.appendChild(pauseBtn); controls.appendChild(finishBtn);
  }
}
function updateFocusRingOnly(){
  var f=App.ui.focusTimer;
  var ring=document.querySelector('.focus-ring');
  var timeEl=document.querySelector('.focus-time');
  if (ring) ring.style.setProperty('--pct', Math.round(((f.total-f.remaining)/f.total)*100));
  if (timeEl) timeEl.textContent = formatMMSS(f.remaining);
}

/* ==========================================================================
   Habits view
   ========================================================================== */
function renderHabitsView(){
  var view = document.getElementById('view-habits');
  var today = todayKey();
  var doneCount = App.habits.filter(function(h){return h.doneDates.indexOf(today)!==-1;}).length;
  view.innerHTML =
    '<div class="section-heading"><h2>Daily Habits</h2><button class="btn primary" id="addHabitBtn">+ New Habit</button></div>'+
    (App.habits.length? '<div class="mission-progress-row"><div class="progress-bar"><span style="width:'+Math.round((doneCount/App.habits.length)*100)+'%"></span></div><span class="frac">'+doneCount+' / '+App.habits.length+' completed</span></div>':'')+
    '<div class="habit-list" id="habitList"></div>';
  document.getElementById('addHabitBtn').addEventListener('click', openHabitForm);
  var list = document.getElementById('habitList');
  if (!App.habits.length){ list.appendChild(emptyStateEl('sprout','No habits yet.','Add something you want to repeat, like exercise or reading.')); return; }
  App.habits.forEach(function(h){
    var done = h.doneDates.indexOf(today)!==-1;
    var row=document.createElement('div'); row.className='habit-row'+(done?' done':'');
    row.innerHTML = '<button type="button" class="habit-check" data-habit="'+h.id+'" aria-label="Toggle habit for today">'+svgIcon('check')+'</button><span class="habit-name">'+glyphHtml(h.icon,'icn-sm','sprout')+' '+escapeHtml(h.name)+'</span>'+
      (h.streak>0? '<span class="habit-streak">'+iconSpan('flame','icn-xs')+' '+h.streak+'</span>':'')+
      '<div class="habit-actions">'+
        '<button type="button" class="icon-btn-sm" data-habitedit="'+h.id+'" aria-label="Edit habit">'+iconSpan('pencil','icn-sm')+'</button>'+
        '<button type="button" class="icon-btn-sm" data-habitremove="'+h.id+'" aria-label="Delete habit">'+iconSpan('x','icn-sm')+'</button>'+
      '</div>';
    list.appendChild(row);
  });
  list.querySelectorAll('[data-habit]').forEach(function(b){ b.addEventListener('click', function(){ toggleHabitToday(b.dataset.habit); renderHabitsView(); }); });
  list.querySelectorAll('[data-habitedit]').forEach(function(b){ b.addEventListener('click', function(){ openHabitForm(b.dataset.habitedit); }); });
  list.querySelectorAll('[data-habitremove]').forEach(function(b){ b.addEventListener('click', function(){ confirmDialog('Delete habit?','This deletes the habit and its history. This cannot be undone.', function(){ deleteHabit(b.dataset.habitremove); renderHabitsView(); }); }); });
}
function openHabitForm(habitId){
  var overlay=document.getElementById('habitFormOverlay');
  var box=document.getElementById('habitFormBox');
  var existing = habitId ? App.habits.find(function(h){return h.id===habitId;}) : null;
  box.innerHTML='<div class="modal-header"><h3>'+(existing?'Edit Habit':'New Habit')+'</h3><button class="modal-close" id="habitFormCloseBtn" aria-label="Close">'+svgIcon('x')+'</button></div>'+
    '<div class="field"><label for="habitNameInput">Habit name</label><input type="text" id="habitNameInput" placeholder="e.g. Read, Exercise, Drink water"></div>'+
    '<div class="field"><label for="habitIconInput">Icon (optional emoji)</label><input type="text" id="habitIconInput" maxlength="4" placeholder="Optional"></div>'+
    '<button class="btn primary" id="habitFormSave" style="justify-content:center">'+(existing?'Save Changes':'Create Habit')+'</button>';
  if (existing){
    document.getElementById('habitNameInput').value = existing.name;
    document.getElementById('habitIconInput').value = existing.icon || '';
  }
  overlay.hidden=false;
  document.getElementById('habitFormCloseBtn').addEventListener('click', function(){overlay.hidden=true;});
  document.getElementById('habitFormSave').addEventListener('click', function(){
    var name=document.getElementById('habitNameInput').value.trim();
    if(!name) return;
    var icon = document.getElementById('habitIconInput').value.trim();
    if (existing){ updateHabit(existing.id, {name:name, icon:icon}); }
    else { createHabit(name, icon); }
    overlay.hidden=true;
    renderCurrentView();
  });
  setTimeout(function(){ document.getElementById('habitNameInput').focus(); },0);
}

/* ==========================================================================
   Goals view
   ========================================================================== */
function renderGoalsView(){
  var view = document.getElementById('view-goals');
  var archivedCount = App.goals.filter(function(g){return g.archived;}).length;
  view.innerHTML =
    '<div class="section-heading"><h2>Goals</h2><button class="btn primary" id="addGoalBtn">+ New Goal</button></div>'+
    '<div class="filter-row" id="goalsTabRow">'+
      '<button type="button" class="chip" data-goalsview="active" aria-pressed="'+(App.ui.goalsView==='active')+'">Active</button>'+
      '<button type="button" class="chip" data-goalsview="archived" aria-pressed="'+(App.ui.goalsView==='archived')+'">Archived<span class="nav-count" style="margin-left:0.4rem">'+archivedCount+'</span></button>'+
    '</div>'+
    '<div id="goalsList" style="display:flex;flex-direction:column;gap:0.7rem;"></div>';
  document.getElementById('addGoalBtn').addEventListener('click', openGoalForm);
  document.querySelectorAll('#goalsTabRow [data-goalsview]').forEach(function(b){
    b.addEventListener('click', function(){ App.ui.goalsView = b.dataset.goalsview; renderGoalsView(); });
  });

  var showingArchived = App.ui.goalsView==='archived';
  var goals = App.goals.filter(function(g){ return showingArchived ? g.archived : !g.archived; });
  var list = document.getElementById('goalsList');
  if (!goals.length){
    if (showingArchived) list.appendChild(emptyStateEl('target','No archived goals.','Goals you archive will show up here.'));
    else list.appendChild(emptyStateEl('target','No goals yet.','Create a goal and link tasks to it to track progress.'));
    return;
  }
  goals.forEach(function(g){
    var p = goalProgress(g.id);
    var card=document.createElement('div'); card.className='goal-card'+(g.archived?' archived':'');
    card.innerHTML = '<div class="goal-top"><div><div class="goal-title">'+escapeHtml(g.title)+'</div>'+
      (g.targetDate? '<div class="goal-target">Target: '+new Date(g.targetDate+'T00:00:00').toLocaleDateString(undefined,{month:'long',day:'numeric'})+'</div>':'')+
      '</div><span class="goal-pct">'+p.pct+'%</span></div>'+
      '<div class="progress-bar"><span style="width:'+p.pct+'%"></span></div>'+
      '<div class="goal-foot"><span><b>'+p.total+'</b> Tasks</span><span><b>'+p.done+'</b> Completed</span><span><b>'+(p.total-p.done)+'</b> Remaining</span></div>'+
      '<div class="detail-actions">'+
        (g.archived
          ? '<button type="button" class="btn ghost" data-unarchive="'+g.id+'">Unarchive</button>'
          : '<button type="button" class="btn ghost" data-archive="'+g.id+'">Archive</button>')+
        '<button type="button" class="btn danger" data-delete="'+g.id+'">Delete</button>'+
      '</div>';
    list.appendChild(card);
  });
  list.querySelectorAll('[data-archive]').forEach(function(b){ b.addEventListener('click', function(){ archiveGoal(b.dataset.archive); renderGoalsView(); }); });
  list.querySelectorAll('[data-unarchive]').forEach(function(b){ b.addEventListener('click', function(){ unarchiveGoal(b.dataset.unarchive); renderGoalsView(); }); });
  list.querySelectorAll('[data-delete]').forEach(function(b){ b.addEventListener('click', function(){ confirmDialog('Delete goal?','This does not delete linked tasks, only the goal.', function(){ deleteGoal(b.dataset.delete); renderGoalsView(); }); }); });
}
function openGoalForm(){
  var overlay=document.getElementById('goalFormOverlay');
  var box=document.getElementById('goalFormBox');
  box.innerHTML='<div class="modal-header"><h3>New Goal</h3><button class="modal-close" id="goalFormCloseBtn" aria-label="Close">'+svgIcon('x')+'</button></div>'+
    '<div class="field"><label for="goalTitleInput">Goal title</label><input type="text" id="goalTitleInput" placeholder="e.g. Learn Graphic Design"></div>'+
    '<div class="field"><label for="goalTargetInput">Target date (optional)</label><input type="date" id="goalTargetInput"></div>'+
    '<p style="font-size:0.78rem;color:var(--text-mute)">Tip: assign tasks to this goal from the "Goal" field when creating or editing a task.</p>'+
    '<button class="btn primary" id="goalFormSave" style="justify-content:center">Create Goal</button>';
  overlay.hidden=false;
  document.getElementById('goalFormCloseBtn').addEventListener('click', function(){overlay.hidden=true;});
  document.getElementById('goalFormSave').addEventListener('click', function(){
    var title=document.getElementById('goalTitleInput').value.trim();
    if(!title) return;
    createGoal({title:title, targetDate:document.getElementById('goalTargetInput').value||null});
    overlay.hidden=true;
    renderCurrentView();
  });
  setTimeout(function(){ document.getElementById('goalTitleInput').focus(); },0);
}

/* ==========================================================================
   Achievements view
   ========================================================================== */
function renderAchievementsView(){
  var view = document.getElementById('view-achievements');
  view.innerHTML = '<div class="section-heading"><h2>Achievements</h2></div><div class="achv-grid" id="achvGrid"></div>';
  var grid = document.getElementById('achvGrid');
  ACHIEVEMENT_DEFS.forEach(function(def){
    var a = App.achievements.find(function(x){return x.id===def.id;});
    var card=document.createElement('div'); card.className='achv-card '+(a.unlocked?'unlocked':'locked');
    var val = achievementProgressValue(def);
    card.innerHTML = iconSpan(def.icon,'icn-xl achv-icon')+'<span class="achv-name">'+def.name+'</span><span class="achv-desc">'+def.desc+'</span>'+
      (val!==null? '<span class="achv-progress">'+Math.min(val,def.target)+' / '+def.target+'</span>':'')+
      (a.unlocked? '<span class="achv-date">Unlocked '+new Date(a.unlockedAt).toLocaleDateString(undefined,{month:'short',day:'numeric'})+'</span>':'');
    grid.appendChild(card);
  });
}

/* ==========================================================================
   Insights view
   ========================================================================== */
function renderInsightsView(){
  var view = document.getElementById('view-insights');
  var ins = weeklyInsights();
  var notes = productivityNotes(ins);
  view.innerHTML =
    '<div class="section-heading"><h2>This Week</h2></div>'+
    '<div class="insight-grid">'+
      '<div class="insight-card"><div class="num">'+ins.completed+'</div><div class="label">Tasks Completed</div></div>'+
      '<div class="insight-card"><div class="num">'+ins.completionRate+'%</div><div class="label">Completion Rate</div></div>'+
      '<div class="insight-card"><div class="num">'+formatHM(ins.focusMin)+'</div><div class="label">Focus Time</div></div>'+
      '<div class="insight-card"><div class="num">'+escapeHtml(ins.bestDay)+'</div><div class="label">Best Day</div></div>'+
      '<div class="insight-card"><div class="num">'+escapeHtml(ins.topCategory)+'</div><div class="label">Top Category</div></div>'+
      '<div class="insight-card"><div class="num">'+ins.overdue+'</div><div class="label">Overdue</div></div>'+
    '</div>'+
    '<div class="section-heading"><h2>Observations</h2></div>'+
    '<div class="insight-notes">'+notes.map(function(n){return '<div class="insight-note">'+escapeHtml(n)+'</div>';}).join('')+'</div>';
}

/* ==========================================================================
   Settings view
   ========================================================================== */
function renderSettingsView(){
  var view = document.getElementById('view-settings');
  view.innerHTML =
    '<div class="section-heading"><h2>Settings</h2></div>'+
    '<div class="settings-group">'+
      '<div class="settings-row"><div><div class="t">Theme</div><div class="d">Choose how Momentum OS looks.</div></div>'+
        '<div class="theme-toggle" id="themeToggleGroup">'+
          ['system','light','dark'].map(function(t){return '<button type="button" data-theme-choice="'+t+'" aria-pressed="'+(App.settings.theme===t)+'">'+t.charAt(0).toUpperCase()+t.slice(1)+'</button>';}).join('')+
        '</div></div>'+
      '<div class="settings-row"><div><div class="t">Notifications</div><div class="d">Show due-soon and overdue reminders in the notification center.</div></div>'+
        '<button type="button" class="btn ghost" id="toggleNotifBtn">'+(App.settings.notificationsEnabled!==false?'Enabled':'Disabled')+'</button></div>'+
    '</div>'+
    '<div class="settings-group">'+
      '<div class="settings-row"><div><div class="t">Custom categories</div><div class="d">Add a category tailored to your own life.</div></div></div>'+
      '<div style="display:flex;gap:0.5rem"><input type="text" id="newCatName" placeholder="Category name" style="flex:1"><input type="text" id="newCatIcon" placeholder="Icon" style="width:70px" maxlength="4"><button type="button" class="btn ghost" id="addCatBtn">Add</button></div>'+
      '<div id="customCatList" style="display:flex;flex-wrap:wrap;gap:0.4rem"></div>'+
    '</div>'+
    '<div class="settings-group">'+
      '<div class="settings-row"><div><div class="t">Keyboard shortcuts</div></div></div>'+
      '<div class="kbd-grid">'+
        [['N','New task'],['/','Search'],['F','Focus'],['C','Calendar'],['G','Goals'],['H','Habits'],['Esc','Close dialog']]
          .map(function(k){return '<div class="kbd-row"><span class="kbd">'+k[0]+'</span> '+k[1]+'</div>';}).join('')+
      '</div>'+
    '</div>'+
    '<div class="settings-group">'+
      '<div class="settings-row"><div><div class="t">Export data</div><div class="d">Copy all your data as JSON to back it up.</div></div><button type="button" class="btn ghost" id="exportBtn">Export</button></div>'+
      '<textarea class="export-box" id="exportBox" hidden readonly></textarea>'+
      '<div class="settings-row"><div><div class="t">Import data</div><div class="d">Paste previously exported JSON to restore it.</div></div><button type="button" class="btn ghost" id="importToggleBtn">Import</button></div>'+
      '<textarea class="export-box" id="importBox" hidden placeholder="Paste exported JSON here"></textarea>'+
      '<button type="button" class="btn primary" id="importGoBtn" hidden style="align-self:flex-start">Restore from JSON</button>'+
      '<div class="settings-row"><div><div class="t">Clear all data</div><div class="d">Permanently remove your tasks, habits, goals and progress.</div></div><button type="button" class="btn danger" id="clearAllBtn">Clear Data</button></div>'+
    '</div>';

  document.querySelectorAll('#themeToggleGroup button').forEach(function(b){
    b.addEventListener('click', function(){ App.settings.theme=b.dataset.themeChoice; persistSettings(); applyTheme(); renderSettingsView(); });
  });
  document.getElementById('toggleNotifBtn').addEventListener('click', function(){
    App.settings.notificationsEnabled = App.settings.notificationsEnabled===false ? true : false;
    persistSettings(); renderSettingsView();
  });
  renderCustomCatList();
  document.getElementById('addCatBtn').addEventListener('click', function(){
    var name=document.getElementById('newCatName').value.trim();
    var icon=document.getElementById('newCatIcon').value.trim();
    if (!name) return;
    App.settings.customCategories = App.settings.customCategories||[];
    var palette = ['#5B8DEF','#9B7BE0','#B36BD4','#E36BA8','#4CAF7D','#3FB6A8','#D6B24A','#E08A3C','#DB5A5A'];
    var color = palette[App.settings.customCategories.length % palette.length];
    App.settings.customCategories.push({id:'custom-'+uid(), label:name, icon:icon, color:color});
    persistSettings(); renderSettingsView();
  });
  document.getElementById('exportBtn').addEventListener('click', function(){
    var data = { tasks:App.tasks, stats:App.stats, habits:App.habits, goals:App.goals, achievements:App.achievements, focusSessions:App.focusSessions, settings:App.settings, mission:App.mission, exportedAt:Date.now() };
    var box = document.getElementById('exportBox');
    box.value = JSON.stringify(data,null,2);
    box.hidden=false;
    box.select();
    if (navigator.clipboard){
      navigator.clipboard.writeText(box.value).then(function(){ showToast('Copied to clipboard.'); }).catch(function(){ showToast('Select the text below and copy manually.'); });
    } else {
      showToast('Select the text below and copy manually.');
    }
  });
  document.getElementById('importToggleBtn').addEventListener('click', function(){
    document.getElementById('importBox').hidden=false;
    document.getElementById('importGoBtn').hidden=false;
  });
  document.getElementById('importGoBtn').addEventListener('click', function(){
    var raw = document.getElementById('importBox').value;
    var data;
    try{ data = JSON.parse(raw); }catch(e){ showToast('That JSON could not be read. Please check the format.'); return; }
    confirmDialog('Restore this data?','This will replace your current tasks, habits, goals and progress with the imported data.', function(){
      if (data.tasks) App.tasks=data.tasks;
      if (data.stats) App.stats=Object.assign(defaultStats(),data.stats);
      if (data.habits) App.habits=data.habits;
      if (data.goals) App.goals=data.goals;
      if (data.achievements) App.achievements=data.achievements;
      if (data.focusSessions) App.focusSessions=data.focusSessions;
      if (data.settings) App.settings=Object.assign({theme:'system',customCategories:[],notificationsEnabled:true},data.settings);
      if (data.mission) App.mission=data.mission;
      persistTasks(); persistStats(); persistHabits(); persistGoals(); persistAchievements(); persistFocus(); persistSettings(); persistMission();
      applyTheme();
      showToast('Data restored.');
      navigate('day');
    });
  });
  document.getElementById('clearAllBtn').addEventListener('click', function(){
    confirmDialog('Clear all data?','Are you sure? This will permanently remove your tasks, habits, goals and productivity data.', function(){
      ['tasks','stats','habits','goals','achievements','focus','settings','notifications','mission'].forEach(function(k){
        try{ localStorage.removeItem(STORAGE_KEYS[k]); }catch(e){}
      });
      App.tasks=[]; App.habits=[]; App.goals=[]; App.stats=defaultStats(); App.focusSessions=[]; App.notifications=[];
      App.achievements = ACHIEVEMENT_DEFS.map(function(d){return {id:d.id,unlocked:false,unlockedAt:null,progress:0};});
      App.settings = { theme: App.settings.theme, customCategories: [], notificationsEnabled: true };
      App.mission=null; ensureTodayMission();
      persistTasks();persistHabits();persistGoals();persistStats();persistFocus();persistNotifications();persistAchievements();persistMission();persistSettings();
      showToast('All data cleared.');
      navigate('day');
    });
  });
}
function renderCustomCatList(){
  var el = document.getElementById('customCatList'); if(!el) return;
  el.innerHTML = (App.settings.customCategories||[]).map(function(c){
    return '<span class="category-chip">'+glyphHtml(c.icon,'icn-sm','flag')+' '+escapeHtml(c.label)+' <button type="button" data-removecat="'+c.id+'" aria-label="Remove category" style="background:none;border:none;color:inherit;margin-left:4px;cursor:pointer;display:inline-flex;vertical-align:middle">'+iconSpan('x','icn-xs')+'</button></span>';
  }).join('');
  el.querySelectorAll('[data-removecat]').forEach(function(b){
    b.addEventListener('click', function(){
      App.settings.customCategories = App.settings.customCategories.filter(function(c){return c.id!==b.dataset.removecat;});
      persistSettings(); renderSettingsView();
    });
  });
}

/* ==========================================================================
   Notification panel
   ========================================================================== */
function renderNotifPanel(){
  var panel = document.getElementById('notifPanel');
  if (!App.notifications.length){ panel.innerHTML='<div class="notif-item"><span class="t">No notifications yet.</span></div>'; return; }
  panel.innerHTML = App.notifications.slice(0,25).map(function(n){
    return '<div class="notif-item'+(n.read?'':' unread')+'">'+glyphHtml(n.icon,'icn-sm','bell')+'<div><div class="t">'+escapeHtml(n.text)+'</div><div class="time">'+timeAgo(n.time)+'</div></div></div>';
  }).join('');
}
function updateNotifDot(){ var dot = document.getElementById('notifDot'); if (dot) dot.hidden = unreadNotifCount()===0; }

/* ==========================================================================
   Global event wiring
   ========================================================================== */
function isTypingContext(e){
  var tag = (e.target.tagName||'').toLowerCase();
  return tag==='input' || tag==='textarea' || e.target.isContentEditable;
}

function wireGlobalEvents(){
  document.querySelectorAll('.nav-item, .bn-item[data-route]').forEach(function(b){
    b.addEventListener('click', function(){ navigate(b.dataset.route); });
  });
  document.getElementById('fabAdd').addEventListener('click', function(){ openTaskForm(); });
  document.getElementById('avatarBtn').addEventListener('click', function(){ navigate('settings'); });

  document.getElementById('moreNavBtn').addEventListener('click', function(){
    var overlay = document.getElementById('moreSheetOverlay');
    var expanded = this.getAttribute('aria-expanded')==='true';
    if (expanded){ overlay.hidden = true; this.setAttribute('aria-expanded','false'); return; }
    overlay.hidden = false;
    this.setAttribute('aria-expanded','true');
  });
  document.querySelectorAll('.sheet-item').forEach(function(b){
    b.addEventListener('click', function(){
      document.getElementById('moreSheetOverlay').hidden = true;
      document.getElementById('moreNavBtn').setAttribute('aria-expanded','false');
      navigate(b.dataset.route);
    });
  });

  document.getElementById('taskFormClose').addEventListener('click', closeTaskForm);
  document.getElementById('addSubtaskBtn').addEventListener('click', function(){
    var inp = document.getElementById('newSubtaskInput');
    if (inp.value.trim()){ formSubtasksDraft.push({text:inp.value.trim(), done:false}); inp.value=''; renderSubtasksBuilder(); }
  });
  document.getElementById('taskForm').addEventListener('submit', function(e){
    e.preventDefault();
    var title = document.getElementById('taskTitleInput').value.trim();
    var category = document.getElementById('taskCategorySelect').value;
    var priority = document.getElementById('taskPrioritySelect').value;
    var dueDate = document.getElementById('taskDueDate').value;
    var dueTime = document.getElementById('taskDueTime').value;
    var errEl = document.getElementById('taskFormError');
    var missing =
      !title ? 'Please give this task a title.' :
      !category ? 'Please choose a category.' :
      !priority ? 'Please choose a priority.' :
      !dueDate ? 'Please set a due date.' :
      !dueTime ? 'Please set a due time.' : null;
    if (missing){ errEl.classList.add('visible'); errEl.textContent = missing; return; }
    errEl.classList.remove('visible');
    var data = {
      title: title,
      description: document.getElementById('taskDescInput').value,
      category: category,
      priority: priority,
      dueDate: dueDate || null,
      dueTime: dueTime || null,
      estimatedDuration: document.getElementById('taskEstDuration').value || null,
      recurring: document.getElementById('taskRecurringSelect').value || null,
      goalId: document.getElementById('taskGoalSelect').value || null,
      tags: document.getElementById('taskTagsInput').value.split(',').map(function(s){return s.trim();}).filter(Boolean),
      subtasks: formSubtasksDraft.map(function(s){return {id:s.id||uid(), text:s.text, done:!!s.done};})
    };
    var editingId = document.getElementById('taskFormId').value;
    if (editingId){ updateTask(editingId, data); showToast('Task updated.'); }
    else { createTask(data); showToast('Task added.'); }
    closeTaskForm();
    checkGoalMilestones();
    renderCurrentView();
  });

  document.getElementById('themeBtn').addEventListener('click', function(){
    var order=['system','light','dark'];
    var idx=order.indexOf(App.settings.theme);
    App.settings.theme = order[(idx+1)%order.length];
    persistSettings(); applyTheme();
    showToast('Theme: '+App.settings.theme);
  });

  document.getElementById('notifBtn').addEventListener('click', function(e){
    e.stopPropagation();
    var panel = document.getElementById('notifPanel');
    if (!panel.hidden){ panel.hidden=true; return; }
    renderNotifPanel();
    panel.hidden=false;
    document.getElementById('notifBtn').setAttribute('aria-expanded','true');
    markAllNotificationsRead();
  });
  document.addEventListener('click', function(e){
    var panel = document.getElementById('notifPanel');
    var btn = document.getElementById('notifBtn');
    if (!panel.hidden && !panel.contains(e.target) && e.target!==btn && !btn.contains(e.target)){
      panel.hidden = true;
      btn.setAttribute('aria-expanded','false');
    }
  });

  var searchDebounce;
  document.getElementById('globalSearch').addEventListener('input', function(e){
    clearTimeout(searchDebounce);
    var val = e.target.value;
    searchDebounce = setTimeout(function(){
      App.ui.search = val;
      if (App.route!=='tasks') navigate('tasks'); else renderCurrentView();
    }, 220);
  });

  document.querySelectorAll('.overlay').forEach(function(o){
    o.addEventListener('click', function(e){
      if (e.target===o){
        o.hidden=true;
        var moreBtn = document.getElementById('moreNavBtn');
        if (moreBtn) moreBtn.setAttribute('aria-expanded','false');
      }
    });
  });

  document.addEventListener('keydown', function(e){
    if (e.key === '/'){
      if (!isTypingContext(e)){ e.preventDefault(); document.getElementById('globalSearch').focus(); }
      return;
    }
    if (e.key === 'Escape'){ closeAllOverlays(); return; }
    if (isTypingContext(e)) return;
    if (e.key==='n'||e.key==='N'){ e.preventDefault(); openTaskForm(); }
    else if (e.key==='f'||e.key==='F'){ navigate('focus'); }
    else if (e.key==='c'||e.key==='C'){ navigate('calendar'); }
    else if (e.key==='g'||e.key==='G'){ navigate('goals'); }
    else if (e.key==='h'||e.key==='H'){ navigate('habits'); }
  });
}

/* ==========================================================================
   Init
   ========================================================================== */
function init(){
  loadAll();
  applyTheme();

  var initialRoute = (location.hash||'').replace('#','');
  if (ROUTES.indexOf(initialRoute)!==-1) App.route = initialRoute;

  wireGlobalEvents();
  renderCurrentView();
  checkAchievements();
  checkReminders();
  setInterval(checkReminders, 60000);

  window.addEventListener('hashchange', function(){
    var r = (location.hash||'').replace('#','');
    if (ROUTES.indexOf(r)!==-1){ App.route=r; renderCurrentView(); }
  });
}

init();
