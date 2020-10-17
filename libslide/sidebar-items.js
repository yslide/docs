initSidebarItems({"enum":[["EmitFormat","The format in which a slide grammar should be emitted."],["Expr","An expression."],["ExprPat","A slide expression pattern."],["StmtKind","The kind of a statement."]],"fn":[["build_rules","Given an evaluator context, builds a set of evaluator rules to be used in partial evaluation."],["evaluate","Evaluates a list of statements to as simplified a form as possible for each. The evaluation may be partial, as some values (like variables) may be unknown."],["evaluate_expr","Evaluates an expression to as simplified a form as possible. The evaluation may be partial, as some values (like variables) may be unknown. The returned expression is normalized."],["lint_expr_pat","Lints a slide expression pattern."],["lint_stmt","Lints a slide statement list."],["parse_expression_pattern","Parses a tokenized slide expression pattern, emitting the result and any diagnostics."],["parse_statements","Parses a tokenized slide program, emitting the result and any diagnostics."]],"macro":[["intern_str","Interns a string."],["parse_asgn","Parses an assignment."],["parse_expr","Parses an expression."],["parse_stmt","Parses a statement."],["poly","Creates a new Poly."],["rc_expr","Interns an expression."],["rc_expr_pat","Interns an expression."]],"mod":[["collectors","Module `collectors` provides utilities for collecting items in a slide AST."],["diagnostics","libslide's diagnostic module."],["scanner","Tokenizes slide programs and produces lexing diagnostics."]],"struct":[["Assignment","An assignment."],["EmitConfig","Configuration options for emitting a slide grammar."],["EvaluationResult","Describes the result of a slide program evaluation."],["ParseResult","Describes the result of parsing a slide program."],["Poly","A polynomial in integer space Z. TODO: Currently, this container only services polynomials with non-negative degrees."],["ProgramContext","A context for evaluating a slide program."],["RcExpr","An reference-counted version of an expression."],["Span","Describes the character span of a substring in a text."],["Stmt","A statement in a slide program."],["StmtList","A list of statements in a slide program."]],"trait":[["Emit","Implements the emission of a type in an EmitFormat."],["Grammar","Describes a top-level item in the libslide grammar."],["StmtVisitor","Describes a statement list visitor."]]});