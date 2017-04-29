<?php

namespace Drupal\txc_graphql\GraphQL\Field\Section;

use Drupal\graphql\GraphQL\Field\FieldBase;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\Scalar\StringType;

class SectionTitleField extends FieldBase {

  /**
   * {@inheritdoc}
   */
  public function resolve($value, array $args, ResolveInfo $info) {
    return $value->title;
  }

  /**
   * {@inheritdoc}
   */
  public function getName() {
    return 'title';
  }

  /**
   * {@inheritdoc}
   */
  public function getType() {
    return new StringType();
  }
}
