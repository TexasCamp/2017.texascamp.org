<?php

namespace Drupal\txc_graphql\SchemaProvider;

use Drupal\graphql\SchemaProvider\SchemaProviderBase;
use Drupal\Core\TypedData\TypedDataManager;
use Drupal\txc_graphql\GraphQL\Field\Root\SectionByNameField;
use Drupal\graphql\TypeResolver\TypeResolverInterface;

/**
 * Generates a GraphQL Schema for content entity types.
 */
class SectionByNameSchemaProvider extends SchemaProviderBase {
  /**
   * The type resolver service.
   *
   * @var \Drupal\graphql\TypeResolver\TypeResolverInterface
   */
  protected $typeResolver;

  /**
   * The typed data manager service.
   *
   * @var \Drupal\Core\TypedData\TypedDataManager
   */
  protected $typedDataManager;

  /**
   * Constructs a EntitySchemaProvider object.
   *
   * @param \Drupal\Core\TypedData\TypedDataManager $typedDataManager
   *   The typed data manager service.
   * @param \Drupal\graphql\TypeResolver\TypeResolverInterface $typeResolver
   *   The type resolver service.
   */
  public function __construct(TypedDataManager $typedDataManager, TypeResolverInterface $typeResolver) {
    $this->typeResolver = $typeResolver;
    $this->typedDataManager = $typedDataManager;
  }

  /**
   * {@inheritdoc}
   */
  public function getQuerySchema() {
    return [
      new SectionByNameField(),
    ];
  }
}
