describe("#load", function() {
  it("is defined", function() {
    expect(load).toBeDefined();
  });

  describe("when the body has data-controller=projects and data-action=new", function() {
    beforeEach(function() {
      loadFunction = jasmine.createSpy('loadFunction');
      $('body').data('controller', 'projects')
               .data('action', 'new');
    });

    it("loads the string 'projects#new'", function() {
      load("projects#new", loadFunction);
      expect(loadFunction).toHaveBeenCalledWith("projects", "new");
    });

    it("does not load with different action but same controller", function() {
      load("projects#edit", loadFunction);
      expect(loadFunction).not.toHaveBeenCalled();
    });

    it("does not load with different controller but same action", function() {
      load("pages#new", loadFunction);
      expect(loadFunction).not.toHaveBeenCalled();
    });
  });
});
