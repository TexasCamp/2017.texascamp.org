<?php

namespace Drupal\txc_graphql\GraphQL\Field\Root;

use Drupal\graphql\GraphQL\Field\FieldBase;
use Drupal\txc_graphql\GraphQL\Type\SectionType;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Youshido\GraphQL\Config\Field\FieldConfig;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Field\InputField;
use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\Scalar\StringType;

class SectionByNameField extends FieldBase implements ContainerAwareInterface {
  use ContainerAwareTrait;

  /**
   * {@inheritdoc}
   */
  public function build(FieldConfig $config) {
    $config->addArgument(new InputField([
      'name' => 'name',
      'description' => 'The name of the section.',
      'type' => new NonNullType(new StringType()),
    ]));
  }

  /**
   * {@inheritdoc}
   */
  public function resolve($value, array $args, ResolveInfo $info) {
    $obj = new \StdClass();
    $obj->title = 'Hello World!';
    return $obj;
  }

  /**
   * {@inheritdoc}
   */
  public function getName() {
    return 'sectionByName';
  }

  /**
   * {@inheritdoc}
   */
  public function getType() {
    return new SectionType();
  }
}
