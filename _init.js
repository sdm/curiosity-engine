
//
// curiosity-engine -- Copyright 2008, Shawn MacIntyre; All rights Reserved
//

// Core Libraries used
core.db.modelBase();
core.core.routes();


// Application Libraries


// Routes

routes = new Routes();
routes.setDefault('/controller/default.jxp');
routes.add('foo', '/index.jxp');

