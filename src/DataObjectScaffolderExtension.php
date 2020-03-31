<?php

namespace SilverStripe\SnapshotAdmin;

use GraphQL\Type\Definition\EnumType;
use SilverStripe\GraphQL\Manager;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\DataObjectScaffolder;
use SilverStripe\Snapshots\SnapshotPublishable;
use SilverStripe\Versioned\GraphQL\Extensions\DataObjectScaffolderExtension as VersionedDataObjectScaffolderExtension;
use SilverStripe\Versioned\Versioned;

class DataObjectScaffolderExtension extends VersionedDataObjectScaffolderExtension
{
    /**
     * @var EnumType
     */
    protected $activityEnum;

    /**
     * Adds the "Version" and "Versions" fields to any dataobject that has the Versioned extension.
     * @param Manager $manager
     */
    public function onBeforeAddToManager(Manager $manager)
    {
        /* @var DataObjectScaffolder $owner */
        $owner = $this->owner;

        $instance = $owner->getDataObjectInstance();
        if (!$instance->hasExtension(SnapshotPublishable::class) || !$instance->hasExtension(Versioned::class)) {
            return;
        }
        $owner->addField('SnapshotHash');
    }
}
