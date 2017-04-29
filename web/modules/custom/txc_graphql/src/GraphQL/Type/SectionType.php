<?php

namespace Drupal\txc_graphql\GraphQL\Type;

use Drupal\graphql\GraphQL\Type\AbstractObjectType;
use Drupal\txc_graphql\GraphQL\Field\Section\SectionTitleField;

class SectionType extends AbstractObjectType {

  /**
   * {@inheritdoc}
   */
  public function build($config) {
    $config->addField(new SectionTitleField());
  }


  /**
   * {@inheritdoc}
   */
  public function getName() {
    return 'Section';
  }
}
