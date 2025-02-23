require('../lib/node_loader');
module.exports = {
  ACM: require('./acm'),
  APIGateway: require('./apigateway'),
  ApplicationAutoScaling: require('./applicationautoscaling'),
  AutoScaling: require('./autoscaling'),
  CloudFormation: require('./cloudformation'),
  CloudFront: require('./cloudfront'),
  CloudHSM: require('./cloudhsm'),
  CloudTrail: require('./cloudtrail'),
  CloudWatch: require('./cloudwatch'),
  CloudWatchEvents: require('./cloudwatchevents'),
  CloudWatchLogs: require('./cloudwatchlogs'),
  CodeBuild: require('./codebuild'),
  CodeCommit: require('./codecommit'),
  CodeDeploy: require('./codedeploy'),
  CodePipeline: require('./codepipeline'),
  CognitoIdentity: require('./cognitoidentity'),
  CognitoIdentityServiceProvider: require('./cognitoidentityserviceprovider'),
  CognitoSync: require('./cognitosync'),
  ConfigService: require('./configservice'),
  CUR: require('./cur'),
  DeviceFarm: require('./devicefarm'),
  DirectConnect: require('./directconnect'),
  DynamoDB: require('./dynamodb'),
  DynamoDBStreams: require('./dynamodbstreams'),
  EC2: require('./ec2'),
  ECR: require('./ecr'),
  ECS: require('./ecs'),
  EFS: require('./efs'),
  ElastiCache: require('./elasticache'),
  ElasticBeanstalk: require('./elasticbeanstalk'),
  ELB: require('./elb'),
  ELBv2: require('./elbv2'),
  EMR: require('./emr'),
  ElasticTranscoder: require('./elastictranscoder'),
  Firehose: require('./firehose'),
  GameLift: require('./gamelift'),
  IAM: require('./iam'),
  Inspector: require('./inspector'),
  Iot: require('./iot'),
  IotData: require('./iotdata'),
  Kinesis: require('./kinesis'),
  KMS: require('./kms'),
  Lambda: require('./lambda'),
  LexRuntime: require('./lexruntime'),
  MachineLearning: require('./machinelearning'),
  MarketplaceCommerceAnalytics: require('./marketplacecommerceanalytics'),
  MTurk: require('./mturk'),
  MobileAnalytics: require('./mobileanalytics'),
  OpsWorks: require('./opsworks'),
  Polly: require('./polly'),
  RDS: require('./rds'),
  Redshift: require('./redshift'),
  Rekognition: require('./rekognition'),
  Route53: require('./route53'),
  Route53Domains: require('./route53domains'),
  S3: require('./s3'),
  ServiceCatalog: require('./servicecatalog'),
  SES: require('./ses'),
  SNS: require('./sns'),
  SQS: require('./sqs'),
  SSM: require('./ssm'),
  StorageGateway: require('./storagegateway'),
  STS: require('./sts'),
  XRay: require('./xray'),
  WAF: require('./waf'),
  WorkDocs: require('./workdocs'),
  LexModelBuildingService: require('./lexmodelbuildingservice'),
  Athena: require('./athena'),
  Pricing: require('./pricing'),
  CostExplorer: require('./costexplorer'),
  MediaStoreData: require('./mediastoredata'),
  Comprehend: require('./comprehend'),
  KinesisVideoArchivedMedia: require('./kinesisvideoarchivedmedia'),
  KinesisVideoMedia: require('./kinesisvideomedia'),
  KinesisVideo: require('./kinesisvideo'),
  Translate: require('./translate'),
  ResourceGroups: require('./resourcegroups'),
  Connect: require('./connect'),
  SecretsManager: require('./secretsmanager'),
  IoTAnalytics: require('./iotanalytics'),
  ComprehendMedical: require('./comprehendmedical'),
  Personalize: require('./personalize'),
  PersonalizeEvents: require('./personalizeevents'),
  PersonalizeRuntime: require('./personalizeruntime'),
  ForecastService: require('./forecastservice'),
  ForecastQueryService: require('./forecastqueryservice'),
  KinesisVideoSignalingChannels: require('./kinesisvideosignalingchannels'),
  Location: require('./location'),
  LexRuntimeV2: require('./lexruntimev2')
};