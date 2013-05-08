describe("#load", function() {
  it("is defined", function() {
    expect(load).toBeDefined();
  });

  it("loads the string 'projects#new'", function() {
    loadFunction = jasmine.createSpy('loadFunction');
    $('body').data('controller', 'projects')
             .data('action', 'new');
    load("projects#new", loadFunction);
    expect(loadFunction).toHaveBeenCalledWith("projects", "new");
  });
});
