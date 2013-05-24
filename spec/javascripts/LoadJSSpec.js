describe("#load", function() {
  it("is defined", function() {
    expect(load).toBeDefined();
  });

  it("is a function", function() {
    expect(load).toEqual(jasmine.any(Function));
  });

  describe("when the body has data-controller=projects and data-action=new", function() {
    beforeEach(function() {
      loadFunction = jasmine.createSpy('loadFunction');
      $('body').data('controller', 'projects')
               .data('action', 'new');
    });

    describe("when the input is a string", function() {
      it("loads the string 'projects#new'", function() {
        load("projects#new", loadFunction);
        expect(loadFunction).toHaveBeenCalledWith("projects", "new");
      });

      it("does not load 'projects#edit'", function() {
        load("projects#edit", loadFunction);
        expect(loadFunction).not.toHaveBeenCalled();
      });

      it("does not load 'pages#new'", function() {
        load("pages#new", loadFunction);
        expect(loadFunction).not.toHaveBeenCalled();
      });
    });

    describe("when the input is an controller, action options hash", function() {
      it("loads {controller: projects, action: new}", function() {
        load({controller: "projects", action: "new"}, loadFunction);
        expect(loadFunction).toHaveBeenCalledWith("projects", "new");
      });

      it("does not load {controller: projects, action: edit}", function() {
        load({controller: "projects", action: "edit"}, loadFunction);
        expect(loadFunction).not.toHaveBeenCalled();
      });

      it("does not load {controller: pages, action: new}", function() {
        load({controller: "pages", action: "new"}, loadFunction);
        expect(loadFunction).not.toHaveBeenCalled();
      });
    });

    describe("when the input is a set of controllers and actions", function() {
      it("loads {controllers: {projects: []}}", function() {
        load({controllers: {projects: []}}, loadFunction);
        expect(loadFunction).toHaveBeenCalledWith("projects", "new");
      });

      it("loads {controllers: {projects: ['edit', 'new', 'update']}}", function() {
        load({controllers: {projects: ["edit", "new", "update"]}}, loadFunction);
        expect(loadFunction).toHaveBeenCalledWith("projects", "new");
      });

      it("does not load {controllers: {projects: ['edit', 'update']}}", function() {
        load({controllers: {projects: ["edit", "update"]}}, loadFunction);
        expect(loadFunction).not.toHaveBeenCalled();
      });

      it("loads { controllers: { foo: [], projects: ['new'] } }", function() {
        load({ controllers: { foo: [], projects: ['new'] } }, loadFunction);
        expect(loadFunction).toHaveBeenCalledWith("projects", "new");
      });
    });
  });
});
