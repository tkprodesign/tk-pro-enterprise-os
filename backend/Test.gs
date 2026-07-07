function testServiceRegistry() {

  Logger.log(
    JSON.stringify(
      ServiceRegistry.describe(),
      null,
      2
    )
  );

}